import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    // Simulate successful login
    console.log("Logged in successfully!", formData);
    setErrorMessage("");
    // Navigate to a dashboard or homepage after successful login
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex flex-col justify-center items-center w-1/2">
        <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg mb-6 text-center">
          Log in to continue accessing your account.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 flex justify-center items-center w-1/2">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2 "
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
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block  text-gray-700 text-black-700 font-medium mb-2"
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Forgot Password */}
          <p className="text-center text-sm text-gray-600 mt-4">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </a>
          </p>
          <p className="text-sm text-gray-500 text-center mb-8">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
