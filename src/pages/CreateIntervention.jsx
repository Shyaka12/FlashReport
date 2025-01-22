import { useEffect, useState } from "react";

const CreateIntervention = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    urgency: "low",
    attachments: null,
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = `Lat: ${latitude}, Long: ${longitude}`;
          setFormData((prevData) => ({
            ...prevData,
            location,
          }));
          setLoadingLocation(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch location. Please enable location services.");
          setLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Intervention record submitted:", formData);
    alert("Intervention record submitted successfully!");
    setFormData({
      title: "",
      description: "",
      location: "",
      category: "",
      urgency: "low",
      attachments: null,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Create an Intervention Record
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-slate-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={loadingLocation ? "Fetching location..." : formData.location}
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-slate-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            readOnly
          />
          <button
            type="button"
            onClick={getLocation}
            className="mt-2 text-sm bg-slate-400 text-gray-700 hover:underline"
          >
            Refresh Location
          </button>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-slate-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="bad_road">Bad Road</option>
            <option value="collapsed_bridge">Collapsed Bridge</option>
            <option value="flooding">Flooding</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="urgency"
            className="block text-sm font-medium text-gray-700"
          >
            Urgency Level
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-slate-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="attachments"
            className="block text-sm font-medium text-gray-700"
          >
            Attachments (Optional)
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleChange}
            className="mt-1 block w-full text-black bg-slate-50 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Intervention
        </button>
      </form>
    </div>
  );
};

export default CreateIntervention;
