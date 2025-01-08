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
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 bg-blue-200 text-white p-4 flex flex-col">
        <h2 className="text-2xl text-green-700 md:text-3xl font-bold mb-4 text-center md:text-left">
          Admin Panel
        </h2>
        <ul>
          <li
            className="mb-2 text-center bg-blue-700 hover:bg-blue-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-event")}
          >
            Add Programs
          </li>
          <li
            className="mb-2 text-center bg-blue-700 hover:bg-blue-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-image")}
          >
            Add Gallery Images
          </li>
          <li
            className="mb-2 text-center bg-blue-700 hover:bg-blue-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/add-notice")}
          >
            Add Notices
          </li>
          <li
            className="mb-2 text-center bg-blue-700 hover:bg-blue-500 p-2 rounded cursor-pointer"
            onClick={() => navigate("/messages")}
          >
            Messages
          </li>
        </ul>
        <button
          className="mt-auto px-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md w-full"
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
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
          <h1 className=" text-yellow-500 text-4xl md:text-6xl font-bold  text-center">
            Nepal Ram Gram Foundation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
