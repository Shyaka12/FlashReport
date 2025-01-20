import "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../conte/AuthContext";

export const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">
                User Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 className="text-2xl font-bold mb-4">Your Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Red Flags</h3>
                <p className="text-gray-600">
                  View and manage your red flag reports
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Interventions</h3>
                <p className="text-gray-600">
                  View and manage your intervention requests
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Create New Report</h3>
                <p className="text-gray-600">
                  Submit a new red flag or intervention report
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
