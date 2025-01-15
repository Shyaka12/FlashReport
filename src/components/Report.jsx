import "react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  // Mock Data
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

  const getStatusStyles = (status) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Under Investigation":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const resolvedCount = records.filter(
    (record) => record.status === "Resolved"
  ).length;
  const unresolvedCount = records.filter(
    (record) => record.status === "Under Investigation"
  ).length;
  const rejectedCount = records.filter(
    (record) => record.status === "Rejected"
  ).length;

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

      {/* Summary Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Resolved Records
          </h2>
          <p className="text-4xl font-bold text-green-500">{resolvedCount}</p>
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

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {record.type}
            </h2>
            <p
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(
                record.status
              )}`}
            >
              {record.status}
            </p>
            <p className="mt-4 text-gray-600">{record.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Report;
