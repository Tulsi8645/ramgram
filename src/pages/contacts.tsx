import React, { useEffect, useState } from "react";

interface ContactItem {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ViewContacts: React.FC = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbxGB9pX2kdKcsJgLaUPYv_S0uCPiJ8S328qzjRp-Kxu5MC5MOzGGmHawY3a2f2kmSgLsA/exec"; // Replace with your actual Web App URL

  const fetchAllContacts = async () => {
    const fetchData = new FormData();
    fetchData.append("action", "fetch"); // Include 'action=fetch' to get all rows data

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: fetchData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setContacts(result.data);
      } else {
        setError("Failed to fetch contacts.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while fetching contacts.");
    }
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">View All Messages</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="text-gray-600">
              <strong>Subject:</strong> {contact.subject}
            </p>
            <p className="text-gray-600">
              <strong>Message:</strong> {contact.message}
            </p>
          </div>
        ))}
        {contacts.length === 0 && !error && (
          <p className="col-span-full text-center text-gray-600">
            Searching for messages...
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewContacts;
