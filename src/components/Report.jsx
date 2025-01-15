import "react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  // Mock Data
  const resolvedCount = 12;
  const unresolvedCount = 8;
  const rejectedCount = 4;

  const records = [
    {
      id: 1,
      type: "Red-Flag",
      status: "Resolved",
      description: "Issue resolved.",
    },
    {
      id: 2,
      type: "Intervention",
      status: "Under Investigation",
      description: "Ongoing review.",
    },
    {
      id: 3,
      type: "Red-Flag",
      status: "Rejected",
      description: "Invalid report.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Report</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-200"
        >
          Back
        </button>
      </div>

      {/* Card Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Resolved Records
          </h2>
          <p className="text-4xl font-bold text-blue-500">{resolvedCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Unresolved Records
          </h2>
          <p className="text-4xl font-bold text-yellow-500">
            {unresolvedCount}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Rejected Records
          </h2>
          <p className="text-4xl font-bold text-red-500">{rejectedCount}</p>
        </div>
      </section>

      {/* Table Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">All Records</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">ID</th>
              <th className="border border-gray-300 p-2 text-left">Type</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
              <th className="border border-gray-300 p-2 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="border border-gray-300 p-2">{record.id}</td>
                <td className="border border-gray-300 p-2">{record.type}</td>
                <td className="border border-gray-300 p-2">{record.status}</td>
                <td className="border border-gray-300 p-2">
                  {record.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Report;
