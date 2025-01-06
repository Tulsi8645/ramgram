import React, { useState } from "react";

interface FormData {
  name: string;
  age: string;
  gender: string;
}

const SubmitDataForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    gender: "Male",
  });
  const [message, setMessage] = useState<string>("");

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzOpSfVgZdvxMR8pg9z7BhXLhmEsPShKv7toWsVMbk3xes2ao8-mk6Ie4VVhPjoPG0q/exec"; // Replace with your actual Web App URL

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key as keyof FormData]);
    });
    formDataObj.append("action", "submit");

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();
      if (data.status === "success") {
        setMessage("Data submitted successfully!");
        setFormData({ name: "", age: "", gender: "Male" }); // Reset form data
      } else {
        setMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Data to Google Sheets</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="age" className="block font-medium">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block font-medium">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="border rounded px-2 py-1 w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-green-500">{message}</p>}

      <div className="mt-4">
        <a href="/data" className="text-blue-500 underline">
          View Data
        </a>
      </div>
    </div>
  );
};

export default SubmitDataForm;
