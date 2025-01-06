import React, { useEffect, useRef, useState } from "react";
import noticeIcon from "../assets/icons/icon.jpg"; // Adjust the path if needed

interface NewsItem {
  title: string;
}

const NewsScroller: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbxwJ9WPzvlfxvV_1hlAEOu0se6nWykT1gSgmKlkRmITx5dZaMjiAHwtJokfvealsOc/exec"; // Replace with your actual Web App URL

  const fetchNewsData = async () => {
    const fetchData = new FormData();
    fetchData.append("action", "fetch");

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: fetchData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setNewsItems(result.data); // Assuming result.data is an array of news messages
      } else {
        setError("Failed to fetch news items.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("An error occurred while fetching news.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  const handleMouseEnter = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "running";
    }
  };

  if (isLoading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-full bg-gray-100 py-2 overflow-hidden flex items-center relative">
      <div className="flex-shrink-0 bg-white text-white font-bold text-lg px-4 py-2 rounded-md z-10 flex items-center">
        <img src={noticeIcon} alt="Notice Icon" className="w-9 h-9" />
      </div>
      <div
        ref={scrollerRef}
        className="flex space-x-6 px-4 animate-scroll absolute left-0 ml-24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-blue-400 shadow-md rounded-md p-2 h-10 flex items-center justify-center text-center border border-gray-200 whitespace-nowrap"
          >
            <p className="text-sm text-gray-700 font-medium">{item.title}</p>
          </div>
        ))}
        {newsItems.map((item, index) => (
          <div
            key={`${index}-duplicate`}
            className="flex-shrink-0 bg-blue-400 shadow-md rounded-md p-2 h-10 flex items-center justify-center text-center border border-gray-200 whitespace-nowrap"
          >
            <p className="text-sm text-gray-700 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroller;
