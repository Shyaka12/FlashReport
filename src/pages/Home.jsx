import "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">FLASHREPORT</h1>
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <Link
            to="/signup"
            className="w-full sm:w-auto bg-blue-500 px-4 py-2 rounded-md font-medium text-white hover:bg-blue-700 transition text-center"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto bg-gray-500 px-4 py-2 rounded-md font-medium text-white hover:bg-gray-700 transition text-center"
          >
            Sign In
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 px-4">
          Welcome to{" "}
          <span className="text-blue-500 block sm:inline mt-2 sm:mt-0">
            FLASHREPORT
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl px-4">
          Empowering you with the best tools and services to achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto px-4">
          <Link
            to="/login"
            className="w-full sm:w-auto bg-gray-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-700 text-white text-center"
          >
            Get Started
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 sm:py-6 text-center mt-auto px-4">
        <p className="text-sm sm:text-base">© 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
