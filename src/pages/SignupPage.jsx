import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (!formData.fullName || !formData.email || !formData.password) {
      setErrorMessage("All fields are required!");
      return;
    }

    // Simulate successful signup and redirect
    console.log("Account created successfully!", formData);
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex flex-col justify-center items-center w-1/2">
        <h1 className="text-5xl font-bold mb-4">Join Us Today!</h1>
        <p className="text-lg mb-6 text-center">
          Create a new account to access all our exclusive features and
          benefits.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 flex justify-center items-center w-1/2">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Sign Up
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-white border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Create Account
            </button>
            <p className="text-sm text-gray-500 text-center mb-8">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Log in here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
