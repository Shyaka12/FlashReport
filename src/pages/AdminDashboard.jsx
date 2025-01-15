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
        {/* Records Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">All Records</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {record.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        record.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : record.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={record.status}
                      onChange={(e) =>
                        handleStatusChange(record.id, e.target.value)
                      }
                      className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Dismissed">Dismissed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
