import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiCheckCircle, FiMapPin, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RecordForm = ({ onAddRecord, editingRecord }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    geolocation: "",
    type: "intervention",
    images: [],
    videos: [],
  });
  const [locationError, setLocationError] = useState("");

  // Populate form data when editing
  useEffect(() => {
    if (editingRecord) {
      setFormData(editingRecord);
    }
  }, [editingRecord]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Array.from(files),
    }));
  };

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          geolocation: `${latitude}, ${longitude}`,
        }));
        setLocationError("");
      },
      () => {
        setLocationError("Unable to retrieve your location. Please try again.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord(formData);
    setFormData({
      title: "",
      description: "",
      geolocation: "",
      type: "intervention",
      images: [],
      videos: [],
    });
  };

  const handleRemoveMedia = (type, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl space-y-6 relative"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 left-4 flex items-center text-gray-500 hover:text--700 transition"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        {/* Form Title */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          {editingRecord ? "Edit Record" : "Create a New Record"}
        </h1>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter record title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter record description"
            rows="4"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-2 w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="intervention">Intervention</option>
            <option value="red-flag">Red-Flag</option>
          </select>
        </div>

        {/* Geolocation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Geolocation
          </label>
          <div className="flex items-center mt-2 space-x-2">
            <input
              type="text"
              name="geolocation"
              value={formData.geolocation}
              onChange={handleChange}
              className="flex-1 border border-gray-300 text-gray-900 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter geolocation or fetch automatically"
            />
            <button
              type="button"
              onClick={fetchLocation}
              className="flex items-center justify-center p-2 bg-blue-500 rounded-full text-white shadow-md hover:bg-blue-600 transition focus:outline-none"
            >
              <FiMapPin />
            </button>
          </div>
          {locationError && (
            <p className="text-red-500 text-sm mt-2">{locationError}</p>
          )}
        </div>

        {/* Media Upload */}
        {["images", "videos"].map((type) => (
          <div key={type}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {`Upload ${type}`}
            </label>
            <input
              type="file"
              name={type}
              accept={type === "images" ? "image/*" : "video/*"}
              multiple
              onChange={handleFileChange}
              className="mt-2 w-full text-gray-600"
            />
            <div className="mt-2 flex flex-wrap gap-4">
              {formData[type].map((file, index) => (
                <div
                  key={index}
                  className="relative group rounded-md shadow-sm overflow-hidden"
                >
                  {type === "images" ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-24 w-24 object-cover rounded-lg border border-gray-200"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(file)}
                      className="h-24 w-24 object-cover rounded-lg border border-gray-200"
                      controls
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveMedia(type, index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700 transition opacity-0 group-hover:opacity-100"
                  >
                    <FiX />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 transition shadow-lg"
        >
          <div className="flex items-center justify-center space-x-2">
            <FiCheckCircle />
            <span>{editingRecord ? "Update Record" : "Create Record"}</span>
          </div>
        </button>
      </form>
    </div>
  );
};

RecordForm.propTypes = {
  onAddRecord: PropTypes.func.isRequired,
  editingRecord: PropTypes.object,
};

export default RecordForm;
