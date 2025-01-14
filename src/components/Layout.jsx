import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFlag, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleMouseEnter = () => setIsSidebarHovered(true);
  const handleMouseLeave = () => setIsSidebarHovered(false);

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarHovered ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300 transform flex flex-col shadow-lg`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar Header */}
        <div
          className={`p-4 flex items-center justify-between transition-all duration-500 ${
            isSidebarHovered ? "bg-gray-900" : ""
          }`}
        >
          <h2
            className={`text-2xl font-bold text-yellow-400 transition-opacity duration-300 ${
              isSidebarHovered ? "opacity-100 scale-105" : "opacity-0 scale-75"
            } transform origin-left`}
          >
            Dashboard
          </h2>
          <div
            className={`text-white transform transition-transform duration-300 ${
              isSidebarHovered ? "rotate-180" : "rotate-0"
            }`}
          >
            {isSidebarHovered ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/red-flags"
                className="flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300 group"
              >
                <FaFlag
                  size={20}
                  className="group-hover:scale-110 transform transition-transform duration-300"
                />
                <span
                  className={`transition-all duration-300 ${
                    isSidebarHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                >
                  Dashboard
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/report"
                className="flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300 group"
              >
                <FaUser
                  size={20}
                  className="group-hover:scale-110 transform transition-transform duration-300"
                />
                <span
                  className={`transition-all duration-300 ${
                    isSidebarHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                >
                  Report
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-400 transition-all duration-300">
          <span
            className={`${
              isSidebarHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } transform transition-all duration-300`}
          >
            © 2025 Dashboard
          </span>
        </footer>
      </aside>

      {/* Main Content */}
      <main
        className="flex-grow p-8 bg-white shadow-lg rounded-tl-xl transform transition-all duration-300"
        style={{
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        <Outlet />
      </main>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
