import axios from "axios";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from API
    axios
      .get("http://localhost:5000/api/user-profile")
      .then((response) => setProfileData(response.data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  if (!profileData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Profile</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-800">
            Resolved Records
          </h2>
          <p className="text-4xl font-bold">{profileData.resolved_count}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-yellow-800">
            Unresolved Records
          </h2>
          <p className="text-4xl font-bold">{profileData.unresolved_count}</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-red-800">
            Rejected Records
          </h2>
          <p className="text-4xl font-bold">{profileData.rejected_count}</p>
        </div>
      </div>

      {/* Records List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">All Records</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Record ID</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
                <th className="px-4 py-2 border border-gray-300">Details</th>
              </tr>
            </thead>
            <tbody>
              {profileData.all_records.map((record) => (
                <tr key={record.record_id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {record.record_id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 capitalize">
                    {record.status}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {record.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
