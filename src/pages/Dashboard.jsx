import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFlag,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsSidebarHovered(true);
  const handleMouseLeave = () => setIsSidebarHovered(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleCreateRedFlag = () => {
    navigate("/red-flags"); // Replace with your actual route
  };

  const handleCreateIntervention = () => {
    navigate("/intervention"); // Replace with your actual route
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="sm:hidden bg-gray-800 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-yellow-400">Dashboard</h2>
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen || isSidebarHovered ? "w-64" : "w-0 sm:w-20"
        } bg-gray-800 text-white transition-all duration-500 flex flex-col fixed sm:relative h-screen z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 flex items-center justify-between">
          <h2
            className={`text-xl font-bold text-yellow-400 transition-opacity duration-300 ${
              isSidebarOpen || isSidebarHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </h2>
          <div className="hidden sm:block text-white">
            {isSidebarHovered ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="space-y-4 p-4">
            {[
              {
                to: "/red-flags",
                icon: <FaFlag size={20} />,
                text: "Manage Red-Flags",
              },
              {
                to: "/intervention",
                icon: <FaPlusCircle size={20} />,
                text: "Manage Intervention",
              },
              {
                to: "/report",
                icon: <FaUser size={20} />,
                text: "User Profile",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span
                    className={`transition-opacity duration-300 ${
                      isSidebarOpen || isSidebarHovered
                        ? "opacity-100"
                        : "opacity-0"
                    } whitespace-nowrap`}
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-400">
          {isSidebarHovered ? "© 2025 Dashboard" : "© 2025"}
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 pt-20 sm:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Explore and manage your account using the navigation menu.
          </p>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Red Flag Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Create Red Flag
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Log and manage red flags effectively to keep track of critical
                issues.
              </p>
              <button
                onClick={handleCreateRedFlag}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Create Red Flag
              </button>
            </div>

            {/* Intervention Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Create Intervention
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Initiate interventions and follow up on actions to address
                identified issues.
              </p>
              <button
                onClick={handleCreateIntervention}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Create Intervention
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
