import React, { useEffect, useState } from "react";

interface ImageItem {
  image: string; // Image URL (accessing the "image" key)
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzTKp76nsaKQ6FsqCro8-Hda_du3Q1L5wVrnzpzKu7B9rtHCuheuj3KBgmq-r9MLnNIHQ/exec"; // Replace with your actual Google Apps Script URL

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
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    fetchAllImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        // Loading Animation
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
            <p className="mt-4 text-blue-700 text-lg font-semibold">
              Loading images...
            </p>
          </div>
        </div>
      ) : (
        <>
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
            {images.length === 0 && !error && (
              <p className="text-center">No images found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
