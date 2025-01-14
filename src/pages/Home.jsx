import "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
          <h1 className="text-2xl font-bold">FLASHREPORT</h1>
          <nav className="flex space-x-6">
            <Link
              to="/signup"
              className="bg-blue-500 px-4 py-2 rounded-md font-medium text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="bg-gray-500 px-4 py-2 rounded-md font-medium text-white hover:bg-gray-700 transition"
            >
              Sign In
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-blue-500">FLASHREPORT</span>
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Empowering you with the best tools and services to achieve your
            goals.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/get-started"
              className="bg-gray-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-700 text-white"
            >
              Get Started
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 text-center">
          <p>© 2025. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
