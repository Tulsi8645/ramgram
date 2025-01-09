import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import women from "../assets/hero/women.jpg"; // Adjust the path if needed
import needy from "../assets/hero/needy.jpg"; // Adjust the path if needed
import community from "../assets/hero/community.jpg"; // Adjust the path if needed

interface Notice {
  title: string;
  description: string; // HTML content
}

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [error, setError] = useState<string | null>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbzF-9IW3zZ943M8DatpYmUFBb4UJumU5TOVE2mZqqvb6-ENj-ZdBPqKDkNTLJf8rX9whA/exec"; // Replace with your actual Web App URL

  const fetchNotices = async () => {
    const fetchData = new FormData();
    fetchData.append("action", "fetch"); // Use an appropriate action key for fetching notices

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: fetchData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setNotices(result.data);
      } else {
        setError("Failed to fetch notices.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred while fetching notices.");
    }
  };

  useEffect(() => {
    const lastShown = localStorage.getItem("modalLastShown");
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (lastShown !== today) {
      setIsModalOpen(true);
      localStorage.setItem("modalLastShown", today);
    }

    fetchNotices();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const slides = [
    {
      src: women,
      description: "Together to uplift women",
    },
    {
      src: needy,
      description: "Extend a hand to those in need",
    },
    {
      src: community,
      description: "Empowerment through community development",
    },
  ];

  return (
    <div className="relative h-[600px] px-8 md:mx-4">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Swiper Carousel for Notices */}
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full"
              >
                {notices.map((notice, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <h5 className="text-xl font-bold mb-4 text-center">
                        {notice.title}
                      </h5>
                      <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: notice.description }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <button
              onClick={closeModal}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 block mx-auto mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Swiper Carousel for Hero Section */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-900 bg-opacity-70 p-2 rounded-lg">
                <div className="text-yellow-500 text-l md:text-4xl font-extrabold whitespace-nowrap overflow-hidden text-ellipsis">
                  {slide.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
