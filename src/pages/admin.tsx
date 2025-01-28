import { useNavigate } from "react-router-dom";
import { Calendar, Image, Bell, MessageSquare, LogOut } from "lucide-react"; // Import icons
import cover from "../assets/cover.jpg"; // Adjust the path if needed

const Admin = () => {
  const navigate = useNavigate();

  // Logout handler
  const logoutHandler = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen">
      {/* Sidebar */}
      <div className="w-full my-4 rounded-lg bg-gray-800 md:w-1/6 text-white p-4 flex flex-col">
        <h2 className="text-2xl text-white md:text-2xl font-bold mb-4 text-center hover:text-3xl md:text-left">
          Admin Panel
        </h2>
        <ul>
          <li
            className="mb-1 text-green-600 text-xl hover:bg-gray-300 hover:font-xxl p-2 rounded cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/add-event")}
          >
            <Calendar className="w-5 h-5" /> {/* Icon */}
            Add Programs
          </li>
          <li
            className="mb-1 text-green-600 text-xl hover:bg-gray-300 hover:font-xxl p-2 rounded cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/add-image")}
          >
            <Image className="w-5 h-5" /> {/* Icon */}
            Add Images
          </li>
          <li
            className="mb-1 text-green-600 text-xl hover:bg-gray-300 hover:font-xxl p-2 rounded cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/add-notice")}
          >
            <Bell className="w-5 h-5" /> {/* Icon */}
            Add Notices
          </li>
          <li
            className="mb-1 text-green-600 text-xl hover:bg-gray-300 hover:font-xxl p-2 rounded cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/messages")}
          >
            <MessageSquare className="w-5 h-5" /> {/* Icon */}
            Messages
          </li>
        </ul>

        <button
          className="mt-auto px-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md w-full flex items-center gap-2 justify-center"
          onClick={logoutHandler}
        >
          <LogOut className="w-5 h-5" /> {/* Icon */}
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative h-96 md:h-screen">
        {/* Image Section */}
        <div className="w-full p-4 h-96 md:h-screen relative">
          <img
            src={cover}
            alt="Admin Dashboard"
            className="w-full h-full rounded-lg"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-0 w-full flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center"
            style={{
              animation: "bounce-up 6s infinite",
            }}
          >
            Nepal Ram Gram Foundation
          </h1>
        </div>

        <style>
          {`
            @keyframes bounce-up {
              0%, 100% { transform: translateY(20px); opacity: 0.8; }
              50% { transform: translateY(0); opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Admin;
