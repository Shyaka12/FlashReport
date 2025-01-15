import { ArrowLeft, Camera, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InterventionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: { lat: "", lng: "" },
    category: "",
    images: [],
    status: "draft",
  });

  const [preview, setPreview] = useState([]);

  const categories = [
    "Road Repair",
    "Bridge Collapse",
    "Flooding",
    "Drainage Issues",
    "Street Lighting",
    "Traffic Signals",
    "Other Infrastructure",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));

    // Create preview URLs
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    URL.revokeObjectURL(preview[index]);
    setPreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* Back to Dashboard Icon */}
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Submit Intervention Record
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Damaged Road on Main Street"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Provide detailed information about the issue..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            required
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="latitude"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Latitude
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              value={formData.location.lat}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, lat: e.target.value },
                }))
              }
              step="any"
              placeholder="e.g., -1.9441"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="longitude"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Longitude
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              value={formData.location.lng}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, lng: e.target.value },
                }))
              }
              step="any"
              placeholder="e.g., 29.8739"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
            />
          </div>
        </div>

        {/* Location Picker Button */}
        <button
          type="button"
          className="flex items-center border-gray-300 text-blue-600 hover:text-blue-700"
        >
          <MapPin className="h-5 w-5 mr-2" />
          Pick location on map
        </button>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supporting Images
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="images"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                >
                  <span>Upload images</span>
                  <input
                    id="images"
                    name="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Image Previews */}
        {preview.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {preview.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="h-24 w-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit Intervention Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default InterventionForm;
