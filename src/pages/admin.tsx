
import { useNavigate } from "react-router-dom";
import cover from "../assets/cover.jpg"; // Adjust the path if needed

const Admin = () => {
  const navigate = useNavigate();

  // Logout handler
  const logoutHandler = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-purple-400 text-white p-4 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
        <ul>
          <li
            className="mb-2 text-center bg-gray-700  hover:bg-green-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-event")}
          >
            Add Programs
          </li>
          <li
            className="mb-2 text-center bg-gray-700  hover:bg-green-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-image")}
          >
            Add Gallery Images
          </li>
          <li
            className="mb-2 text-center bg-gray-700  hover:bg-green-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-notice")}
          >
            Add Notices
          </li>
          <li
            className="mb-2 text-center bg-gray-700  hover:bg-green-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/messages")}
          >
            Messages
          </li>
        </ul>
        <button
          className="mt-auto px-4 bg-blue-500 text-white py-2 rounded-md"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Image Section */}
        <img
          src={cover}
          alt="Admin Dashboard"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-yellow-600 text-6xl font-bold">
            Nepal Ram Gram Foundation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
