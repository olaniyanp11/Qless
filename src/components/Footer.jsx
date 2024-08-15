import React from 'react'
import Logo from '../assets/logo2.png'
import { BsFacebook } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BsTwitterX } from 'react-icons/bs'

export const Footer = () => {
  return (
      <footer className='w-full p-10 bg-[#017901] '>
          <hr />
          <div className='flex justify-between items-center'>
              <img src={Logo} alt="" className='w-[200px]' />
              <div className='bg-white p-2 rounded-md '>
                  <input type="text" placeholder='Enter your email' className=' bg-transparent text-center text-[#017901] outline-none' />
                  <button className='bg-[#017901] p-1 px-3 rounded-md text-white outline-none border-none active:outline-none '> Submit</button>
              </div>
          </div>
          <hr />
          <div className='text-white flex justify-between px-1 pt-4'>
              <span className='text-sm text-neutral-300 '>
                  &copy;  2024 group 4, Inc. All rights reserved.
              </span>
              <span className='flex gap-3 text-xl'>
                  <Link to="#" className='hover:text-[#03b403]'><BsFacebook/></Link>
                  <Link to="#" className='hover:text-[#00ba00]'><BsYoutube/></Link>
                  <Link to="#" className='hover:text-[#03bb03]'><BsTwitterX/></Link>
              </span>
          </div>
    </footer>
  )
}
