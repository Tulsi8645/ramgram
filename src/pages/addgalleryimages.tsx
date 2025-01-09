import React, { useState } from "react";
import axios from "axios";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false); // New state for submission status

  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dvnphv6zv/image/upload";
  const uploadPreset = "ml_default";

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzTKp76nsaKQ6FsqCro8-Hda_du3Q1L5wVrnzpzKu7B9rtHCuheuj3KBgmq-r9MLnNIHQ/exec";

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
        setImage(imageUrl);
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
    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("action", "submit");
    formData.append("image", image);

    try {
      setSubmitting(true); // Set submitting to true
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.status === "success") {
        alert("Image added successfully!");
      } else {
        alert("Failed to submit image: " + result.message);
      }
    } catch (error) {
      console.error("Error adding image:", error);
      alert("Error adding image.");
    } finally {
      setSubmitting(false); // Reset submitting status
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload Gallery Image</h1>
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            disabled={uploading || submitting || !image}
          >
            {submitting ? "Submitting..." : "Submit"} {/* Conditional text */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
