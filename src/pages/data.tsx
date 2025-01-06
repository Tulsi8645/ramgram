import React, { useEffect, useState } from "react";

interface DataItem {
  name: string;
  age: string;
  gender: string;
}

const ViewData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzOpSfVgZdvxMR8pg9z7BhXLhmEsPShKv7toWsVMbk3xes2ao8-mk6Ie4VVhPjoPG0q/exec"; // Replace with your actual Web App URL

  const fetchAllData = async () => {
    const fetchData = new FormData();
    fetchData.append("action", "fetch"); // Include 'action=fetch' to get all rows data

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: fetchData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setData(result.data);
      } else {
        setError("Failed to fetch data.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View Submitted Data</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg mb-4"
          >
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Age:</strong> {item.age}
            </p>
            <p>
              <strong>Gender:</strong> {item.gender}
            </p>
          </div>
        ))}
        {data.length === 0 && !error && <p>No data available.</p>}
      </div>
    </div>
  );
};

export default ViewData;
