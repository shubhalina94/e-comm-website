// Header.js

import React from 'react';
import Logo from './Logo'; // Importing the logo image
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-5 flex items-center px-1 justify-between"> 
        <div className=''>
          <Link to={"/"}>
            <Logo w={90} h={60}/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within: shadow pl-2'>
          <input type='text' placeholder='Search for products '  className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 bg-yellow-400 flex items-center justify-center rounded-r-full'>
            <IoSearch />
          </div>
        </div>

        <div className='flex items-center gap-8 mr-8'>

          <div className='text-2xl cursor-pointer'>
            <FaRegUser />
          </div>

          <div className='text-3xl relative'>
            <span>
              <HiOutlineShoppingBag/>
            </span>
            <div className='bg-yellow-400 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute top-0 -right-2'>
              <p className='text-xs'> 0 </p>
            </div>
          </div>

          <div>
            <Link to="/Login" className='px-3 py-1 bg-yellow-400 rounded-full hover:bg-yellow-600'>Login</Link>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
