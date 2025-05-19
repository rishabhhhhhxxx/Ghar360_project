import React from "react";
import { FaSearch } from 'react-icons/fa';
import { Link , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "lucide-react";
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user); // Correct destructuring
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

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

        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>

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
