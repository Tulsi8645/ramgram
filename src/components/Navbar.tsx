import React from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Programs", path: "/programs" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md text-black bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-blue-900 text-2xl">
            <div className="w-20 h-10 rounded-md bg-blue-400 text-white text-2xl font-bold flex items-center justify-center">
              NRGF
            </div>
            <span className="ml-2 text-md">Nepal Ram Gram Foundation</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? item.name === "Donate"
                        ? "bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 underline underline-offset-4"
                        : "underline underline-offset-4 text-blue-600 font-bold"
                      : item.name === "Donate"
                      ? "bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500"
                      : "hover:bg-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === item.path
                    ? item.name === "Donate"
                      ? "bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 underline underline-offset-4"
                      : "underline underline-offset-4 text-blue-600 font-bold"
                    : item.name === "Donate"
                    ? "bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500"
                    : "hover:bg-blue-600"
                }`}
                onClick={() => setIsOpen(false)} // Close menu on item click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
