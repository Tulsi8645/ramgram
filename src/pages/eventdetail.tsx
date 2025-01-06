import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  category: string;
  details: string;
  image: string;
}

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get event ID from URL
  const [event, setEvent] = useState<Event | null>(null); // Store event data
  const [error, setError] = useState<string | null>(null); // Store error message
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbyOo5zlZGCuxPRAvLFZKyj3460z9JWz_WEuX5Ui2xjmm3b8b0z0uMrAVk4jdcxV1PqQ/exec";

  console.log("Event ID from URL:", id);

  useEffect(() => {
    const fetchEventDetails = async () => {
      console.log("Fetching event details...");

      if (!id) {
        setError("Event ID is missing.");
        return;
      }

      try {
        const fetchData = new FormData();
        fetchData.append("action", "fetch");
        fetchData.append("id", id);

        const response = await fetch(webAppUrl, {
          method: "POST",
          body: fetchData,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch event details.");
        }

        const result = await response.json();
        console.log("Fetched data:", result);

        if (result.status === "success") {
          const selectedEvent = result.data.find(
            (event: Event) => event.id === parseInt(id, 10)
          );

          if (selectedEvent) {
            console.log("Selected Event:", selectedEvent);
            setEvent(selectedEvent);
          } else {
            setError("Event not found.");
          }
        } else {
          setError("Failed to fetch event details.");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching event details.");
      }
    };

    fetchEventDetails();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-10">
      {error && <p className="text-red-500">{error}</p>}
      {event ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src={event.image}
            alt={event.title}
            className="h-85  w-full object-cover  rounded-md"
          />
          <h1 className="text-2xl font-bold mt-4">{event.title}</h1>
          <p className="text-blue-800 text-right mt-2">
            {event.category}
          </p>
          <div
            className="mt-4 text-gray-600"
            dangerouslySetInnerHTML={{ __html: event.details }}
          ></div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetails;
