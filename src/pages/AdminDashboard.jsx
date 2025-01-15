import { useState } from "react";

const AdminDashboard = () => {
  // Sample data for red-flag/intervention records
  const [records, setRecords] = useState([
    { id: 1, title: "Red Flag 1", status: "Pending", type: "Red-Flag" },
    {
      id: 2,
      title: "Intervention 1",
      status: "Resolved",
      type: "Intervention",
    },
    { id: 3, title: "Red Flag 2", status: "Dismissed", type: "Red-Flag" },
    { id: 4, title: "Intervention 2", status: "Pending", type: "Intervention" },
  ]);

  // Update the status of a record
  const handleStatusChange = (id, newStatus) => {
    const updatedRecords = records.map((record) =>
      record.id === id ? { ...record, status: newStatus } : record
    );
    setRecords(updatedRecords);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm">Manage Red-Flags and Interventions</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        {/* Records Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((record) => (
            <div
              key={record.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {record.title}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>ID:</strong> {record.id}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {record.type}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Status:</strong>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ml-2 ${
                    record.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : record.status === "Resolved"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {record.status}
                </span>
              </p>
              <div>
                <label
                  htmlFor={`status-${record.id}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Update Status:
                </label>
                <select
                  id={`status-${record.id}`}
                  value={record.status}
                  onChange={(e) =>
                    handleStatusChange(record.id, e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Dismissed">Dismissed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
