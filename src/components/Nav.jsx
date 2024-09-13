import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiMenu, FiX } from 'react-icons/fi'; // Add FiX icon for closing the menu
import Profile from "../assets/profile.jpg";
import { clearToken } from '../redux/userSlice'; // Make sure you have this action for logging out

export const Nav = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const apiUrl = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const handleLogout = () => {
    dispatch(clearToken()); // Clear token and user state
    navigate('/logout');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="w-full h-[10vh] bg-white flex justify-between items-center px-8 shadow-md relative">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[60px]" />
      </Link>

      {/* Desktop Menu */}
      <span className="justify-between items-center w-3/5 hidden sm:flex">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <>
            <div className={`w-[50px] h-[50px] rounded-[25px] flex`}>
              <img src={Profile} className='w-full h-full rounded-[50px]' alt="User profile" />
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded-md w-[100px] text-center hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-[#e9b31f] text-white p-2 rounded-md w-[100px] text-center hover:text-[#017901] hover:bg-transparent border hover:border-[#017901] transition duration-300"
          >
            Login
          </Link>
        )}
      </span>

      {/* Mobile Menu Toggle Icon */}
      <div className="sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FiX className="text-[#017901] text-2xl" /> : <FiMenu className="text-[#017901] text-2xl" />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white z-50 transition-all transition-[3s] shadow-lg sm:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                to="/"
                className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300"
                onClick={toggleMenu} // Close menu after clicking
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <div className={`w-[50px] h-[50px] rounded-[25px] flex`}>
                  <img src={Profile} className='w-full h-full rounded-[50px]' alt="User profile" />
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu(); // Close menu after logout
                  }}
                  className="bg-red-500 text-white p-2 rounded-md w-[100px] text-center hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-[#e9b31f] text-white p-2 rounded-md w-[100px] text-center hover:text-[#017901] hover:bg-transparent border hover:border-[#017901] transition duration-300"
                onClick={toggleMenu} // Close menu after login click
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};
