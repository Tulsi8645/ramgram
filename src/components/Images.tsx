import React, { useEffect, useState } from "react";

interface ImageItem {
  image: string; // Image URL (accessing the "image" key)
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbx7qPxJxQZ6-TAMC06lQMR5SsRxohPjcXVsZOtczz0ruLXpxilylHTFPu2iADNzX5HM/exec"; // Replace with your actual Google Apps Script URL

  const fetchAllImages = async () => {
    const fetchData = new FormData();
    fetchData.append("action", "fetch"); // Custom action to fetch images from the sheet

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: fetchData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setImages(result.data); // Assuming 'data' contains an array of images
      } else {
        setError("Failed to fetch images.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while fetching images.");
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  return (
    <div className="container mx-auto p-4">

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <a href={image.image} target="_blank" rel="noopener noreferrer">
              <img
                src={image.image} // Correctly referencing 'image' here
                alt={`Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg border-4 border-blue-200 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              />
            </a>
          </div>
        ))}
        {images.length === 0 && !error && <p className="text-center">Searching Images.......</p>}
      </div>
    </div>
  );
};

export default ImageGallery;
