import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "lucide-react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user); // Correct destructuring

  return (
    <header className="bg-slate-200 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Home className="text-indigo-600 w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            <span className="text-indigo-600">Ghar</span>
            <span>360</span>
          </h1>
        </Link>

        {/* Center - Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border border-gray-300 p-2 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Right - Navigation Links */}
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/profile" className="flex items-center gap-2">
            {currentUser ? (
              <img
                className="rounded-full h-10 w-10 object-cover border border-gray-300"
                src={
                  currentUser.avatar ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="profile"
              />
            ) : (
              <span className="text-slate-700 hover:underline">Sign in</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
