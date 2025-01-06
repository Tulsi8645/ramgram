import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Event {
  id: number; // Added ID field
  title: string;
  category: string;
  details: string;
  image: string;
}

const Event: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbyOo5zlZGCuxPRAvLFZKyj3460z9JWz_WEuX5Ui2xjmm3b8b0z0uMrAVk4jdcxV1PqQ/exec";

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchData = new FormData();
      fetchData.append("action", "fetch");

      try {
        const response = await fetch(webAppUrl, {
          method: "POST",
          body: fetchData,
        });
        const result = await response.json();
        if (result.status === "success") {
          // Add row number as ID
          const eventsWithId = result.data.map((event: any, index: number) => ({
            ...event,
            id: index + 2, // Use row index as unique ID
          }));
          setEvents(eventsWithId.reverse());
        } else {
          setError("Failed to fetch events.");
        }
      } catch (err: any) {
        console.error("Error:", err);
        setError("An error occurred while fetching events.");
      }
    };

    fetchEvents();
  }, []);

 const handleCardClick = (id: number) => {
   navigate(`/event-details/${id}`); // Navigate using the dynamic segment
 };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Programs & Events
        </h1>
        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCardClick(event.id)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="justify-right text-right text-blue-800">
                    {event.category}
                  </p>
                  <p className="text-gray-600 font-semibold mt-2">
                    {event.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500 text-lg">searching for events and programs...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
