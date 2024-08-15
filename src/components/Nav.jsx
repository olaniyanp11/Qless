import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

export const Nav = () => {
  return (
    <nav className="w-full h-[10vh] bg-white flex justify-between items-center px-8 shadow-md">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[60px]" />
      </Link>
      <span className=' justify-between items-center w-3/5 hidden sm:flex'>
        <ul className="flex gap-4">
          <li><Link to="/" className='font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300'>Home</Link></li>
          <li><Link to="/about" className='font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300'>About</Link></li>
          <li><Link to="/contact" className='font-sans text-sm text-neutral-500 hover:text-[#017901] transition duration-300'>Contact</Link></li>
        </ul>
        <Link to="/Login" className=' bg-[#017901] text-white p-2 rounded-md w-[100px] text-center hover:text-[#017901] hover:bg-transparent border hover:border-[#017901]  transition duration-300'> Login</Link>

      </span>
      <FiMenu className='text-[#017901] flex sm:hidden' />
    </nav>
  );
};
