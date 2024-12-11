// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <img
            src="./public/BITSA logo.png" 
            alt="Bitsa Logo"
            className="h-12" 
          />
        </div>

        {/* Center section (Navigation links for larger screens) */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold text-[18px]">
          <a href="/" className="hover:text-[#03002B]">Home</a>
          <a href="/aboutus" className="hover:text-[#03002B]">About Us</a>
          <a href="/events" className="hover:text-[#03002B]">Events</a>
          <a href="/newsletters" className="hover:text-[#03002B]">Newsletters</a>
          <a href="/contactus" className="hover:text-[#03002B]">Contact Us</a>
        </nav>

        {/* Right section (Member button) */}
        <div className="hidden md:block">
          <button className="bg-[#03002B] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Member ?
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <TiThMenu width={40} height={40}/>
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-gray-700 font-semibold w-full">
          <a href="/" className="block hover:text-[#03002B]">Home</a>
          <a href="/aboutus" className="block hover:text-[#03002B]">About Us</a>
          <a href="/events" className="block hover:text-[#03002B]">Events</a>
          <a href="/newsletters" className="block hover:text-[#03002B]">Newsletters</a>
          <a href="/contactus" className="block hover:text-[#03002B]">Contact Us</a>
          <button className="bg-[#03002B] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors mt-4">
            Member ?
          </button>
        </div>
      )}
    </header>
  );

  // return (
  //   <header className="bg-white py-4 px-6">
  //     <div className="flex justify-between items-center">
  //       {/* Left section (Logo) */}
  //       <div className="flex items-center">
  //         <img
  //           src="./public/BITSA logo.png" 
  //           alt="Bitsa Logo"
  //           className="h-12" 
  //         />
  //       </div>

  //       {/* Center section (Navigation links) */}
  //       <div className="flex space-x-6 text-gray-700 font-semibold justify-center flex-grow text-[24px]">
  //         <a href="/" className="hover:text-[#03002B]">Home</a>
  //         <a href="/aboutus" className="hover:text-[#03002B]">About Us</a>
  //         <a href="/events" className="hover:text-[#03002B]">Events</a>
  //         <a href="/newsletters" className="hover:text-[#03002B]">Newsletters</a>
  //         <a href="/contactus" className="hover:text-[#03002B]">Contact Us</a>
  //       </div>

  //       {/* Right section (Member button) */}
  //       <div>
  //         <button className="bg-[#03002B] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
  //           Member ?
  //         </button>
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
