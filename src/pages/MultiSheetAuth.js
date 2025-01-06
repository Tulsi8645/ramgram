function doPost(e) {
  e = e || {
    parameter: {
      action: "submit",
      sheet: "Sheet1",
      name: "John Doe",
      age: "25",
      gender: "Male",
    },
  };

  var ss = SpreadsheetApp.openById(
    "12gDdDc35mksOL9Ljs00Y8Mr2uxg-ZK7MDdDVh8arEMI"
  ); // Replace with your Spreadsheet ID
  var sheet;

  // Check which sheet the action is for
  if (e.parameter.sheet === "Sheet1") {
    sheet = ss.getSheetByName("Sheet1");
  } else if (e.parameter.sheet === "Sheet2") {
    sheet = ss.getSheetByName("Sheet2");
  } else if (e.parameter.sheet === "Sheet3") {
    sheet = ss.getSheetByName("Sheet3");
  } else if (e.parameter.sheet === "Sheet4") {
    sheet = ss.getSheetByName("Sheet4");
  } else {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: "Invalid sheet specified." })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // User Registration - Sheet4
  if (e.parameter.action === "register" && e.parameter.sheet === "Sheet4") {
    var username = e.parameter.username;
    var email = e.parameter.email;
    var password = e.parameter.password;

    // Check if the user already exists
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === username || data[i][1] === email) {
        return ContentService.createTextOutput(
          JSON.stringify({ status: "error", message: "User already exists." })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Register the new user
    sheet.appendRow([username, email, password]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Registration successful!" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // User Login - Sheet4
  if (e.parameter.action === "login" && e.parameter.sheet === "Sheet4") {
    var username = e.parameter.username;
    var password = e.parameter.password;

    // Fetch user data
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === username && data[i][2] === password) {
        // Generate a token (using Utilities.getUuid for simplicity)
        var token = Utilities.getUuid();

        // Optionally: Store the token somewhere (e.g., in a separate token sheet)
        // You can store tokens in a separate sheet or use this for validation.
        // Example: ss.getSheetByName('Tokens').appendRow([username, token]);

        return ContentService.createTextOutput(
          JSON.stringify({
            status: "success",
            message: "Login successful!",
            token: token,
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Invalid username or password.",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // Other actions (Sheet1, Sheet2, Sheet3)
  if (e.parameter.action === "submit") {
    if (e.parameter.sheet === "Sheet1") {
      var name = e.parameter.name;
      var age = e.parameter.age;
      var gender = e.parameter.gender;
      sheet.appendRow([name, age, gender]);
    } else if (e.parameter.sheet === "Sheet2") {
      var name2 = e.parameter.name;
      var email2 = e.parameter.email;
      var phone = e.parameter.phone;
      sheet.appendRow([name2, email2, phone]);
    } else if (e.parameter.sheet === "Sheet3") {
      var name3 = e.parameter.name;
      var position = e.parameter.position;
      var salary = e.parameter.salary;
      sheet.appendRow([name3, position, salary]);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data submitted successfully!",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } else if (e.parameter.action === "fetch") {
    var data = sheet.getDataRange().getValues();
    var jsonData = [];

    for (var i = 1; i < data.length; i++) {
      if (e.parameter.sheet === "Sheet1") {
        jsonData.push({
          name: data[i][0],
          age: data[i][1],
          gender: data[i][2],
        });
      } else if (e.parameter.sheet === "Sheet2") {
        jsonData.push({
          name: data[i][0],
          email: data[i][1],
          phone: data[i][2],
        });
      } else if (e.parameter.sheet === "Sheet3") {
        jsonData.push({
          name: data[i][0],
          position: data[i][1],
          salary: data[i][2],
        });
      } else if (e.parameter.sheet === "Sheet4") {
        jsonData.push({ username: data[i][0], email: data[i][1] });
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", data: jsonData })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ status: "error", message: "Unknown action." })
  ).setMimeType(ContentService.MimeType.JSON);
}
