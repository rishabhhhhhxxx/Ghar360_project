import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const currentUser = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">RealEstate</h1>
        </Link>
        {/* Center - Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border border-gray-300 p-2 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Right - Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
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
