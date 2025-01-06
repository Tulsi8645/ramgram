import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";

const AddEditEvent: React.FC = () => {
  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    category: "",
    details: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const quillRef = useRef<Quill | null>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("id");

 const webAppUrl =
   "https://script.google.com/macros/s/AKfycbyOo5zlZGCuxPRAvLFZKyj3460z9JWz_WEuX5Ui2xjmm3b8b0z0uMrAVk4jdcxV1PqQ/exec";

    const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dxqt8usui/image/upload";
  const uploadPreset = "ml_default"; // Replace with your Cloudinary upload preset

  useEffect(() => {
    if (editorContainerRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            [{ align: [] }],
          ],
        },
      });
    }

    const fetchEventDetails = async () => {
      if (eventId) {
        try {
          const response = await fetch(
            `${webAppUrl}?action=fetch&id=${eventId}`
          );
          const data = await response.json();

          if (data.status === "success" && data.event) {
            const { title, category, details, image, id } = data.event;
            setEventData({ id, title, category, details, image });
            if (quillRef.current) quillRef.current.root.innerHTML = details;
            setPreviewImage(image);
          }
        } catch (err) {
          console.error("Error fetching event details:", err);
        }
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        setUploading(true);
        setUploadError(null);
        const response = await axios.post(cloudinaryUrl, formData);

        const imageUrl = response.data.secure_url;
        setEventData((prevData) => ({ ...prevData, image: imageUrl }));
        setPreviewImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploadError("Failed to upload image. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("category", eventData.category);
    formData.append("details", quillRef.current?.root.innerHTML || "");
    formData.append("image", eventData.image);
    formData.append("action", eventId ? "update" : "submit");
    if (eventId) formData.append("id", eventData.id);

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.status === "success") {
        alert("Event saved successfully!");
        navigate("/");
      } else {
        alert("Failed to save event: " + result.message);
      }
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Error saving event");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(
          `${webAppUrl}?action=delete&id=${eventId}`,
          {
            method: "POST",
          }
        );
        const result = await response.json();

        if (result.status === "success") {
          alert("Event deleted successfully!");
          navigate("/");
        } else {
          alert("Failed to delete event: " + result.message);
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Error deleting event");
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {eventId ? "Edit Event" : "Add Event"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-gray-700 border rounded p-2"
            disabled={uploading}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-3 h-40 object-cover"
            />
          )}
          {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category:</label>
          <input
            type="text"
            name="category"
            value={eventData.category}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Details:</label>
          <div ref={editorContainerRef} className="h-40 border rounded"></div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            {eventId ? "Update" : "Add"}
          </button>
          {eventId && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Delete Event
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEditEvent;
