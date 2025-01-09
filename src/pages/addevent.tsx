import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import axios from "axios";

const AddEvent: React.FC = () => {
  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    details: "",
    image: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission loading
  const quillRef = useRef<Quill | null>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbxCNSeqkQWwmUBRW7fNc8eUhEigOqV4Tfygwu_ztx70xjP1m9PUSyitokkESGblerYH/exec";
  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dvnphv6zv/image/upload";
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
  }, []);

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
    setIsSubmitting(true); // Show loading indicator

    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("category", eventData.category);
    formData.append("details", quillRef.current?.root.innerHTML || "");
    formData.append("image", eventData.image);
    formData.append("action", "submit");

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.status === "success") {
        alert("Event added successfully!");
        setEventData({ title: "", category: "", details: "", image: "" });
        setPreviewImage(null);
        if (quillRef.current) quillRef.current.root.innerHTML = ""; // Reset editor
      } else {
        alert("Failed to add event: " + result.message);
      }
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Error adding event");
    } finally {
      setIsSubmitting(false); // Hide loading indicator
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Event</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-gray-700 border rounded p-2"
            disabled={uploading || isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Details:</label>
          <div
            ref={editorContainerRef}
            className="h-40 border rounded"
            style={{ pointerEvents: isSubmitting ? "none" : "auto" }}
          ></div>
        </div>

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding Event..." : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
