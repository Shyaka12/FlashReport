import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email || !formData.password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    // Determine role based on email
    if (formData.email.includes("admin")) {
      console.log("Admin logged in!");
      navigate("/admin-dashboard"); // Redirect to admin dashboard
    } else {
      console.log("User logged in!");
      navigate("/dashboard"); // Redirect to user dashboard
    }

    setErrorMessage(""); // Clear any previous errors
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex flex-col justify-center items-center w-1/2">
        <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg mb-6 text-center">
          Log in to continue accessing your account.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow-md font-medium hover:bg-gray-200 transition"
        >
          Back to Home
        </button>
      </div>

      <div className="bg-gray-200 flex justify-center items-center w-1/2 ">
        <div className=" bg-gray-300 bg-opacity-100 rounded-lg shadow-2xl hover:shadow-lg w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="w-full px-4 py-3 border  bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" w-24 h-8 rounded-full bg-blue-600 text-white px-2 py-1  font-medium hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transition"
              >
                Log In
              </button>
            </div>
          </form>

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
