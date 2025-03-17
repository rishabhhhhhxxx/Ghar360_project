import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/signin" className="text-gray-700 hover:text-blue-600">Sign In</a>
        </nav>

      </div>
    </header>
  );
}
