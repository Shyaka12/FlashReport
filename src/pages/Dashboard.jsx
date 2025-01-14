import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFlag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleMouseEnter = () => setIsSidebarHovered(true);
  const handleMouseLeave = () => setIsSidebarHovered(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarHovered ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-500 flex flex-col`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`text-xl font-bold text-yellow-400 transition-opacity duration-300 ${
              isSidebarHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </h2>
          <div className="text-white">
            {isSidebarHovered ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/red-flags"
                className="flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                <FaFlag size={20} />
                <span
                  className={`transition-opacity duration-300 ${
                    isSidebarHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Manage Red-Flags
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/report"
                className="flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                <FaUser size={20} />
                <span
                  className={`transition-opacity duration-300 ${
                    isSidebarHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  User Profile
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-400">
          {isSidebarHovered ? "© 2025 Dashboard" : "© 2025"}
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Hover over the sidebar to expand it.
        </p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-800">Red Flags</h3>
            <p className="text-gray-600 mt-2">
              Track and manage red flags efficiently.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-800">Interventions</h3>
            <p className="text-gray-600 mt-2">
              Monitor and handle interventions seamlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-800">User Profile</h3>
            <p className="text-gray-600 mt-2">
              Manage and update your user profile settings.
            </p>
          </div>

          {/* Add more cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
