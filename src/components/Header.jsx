// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <img
            src="./public/BITSA logo.png" 
            alt="Bitsa Logo"
            className="h-12" 
          />
        </div>

        {/* Center section (Navigation links) */}
        <div className="flex space-x-6 text-gray-700 font-semibold justify-center flex-grow text-[24px]">
          <a href="/" className="hover:text-[#03002B]">Home</a>
          <a href="/aboutus" className="hover:text-[#03002B]">About Us</a>
          <a href="/events" className="hover:text-[#03002B]">Events</a>
          <a href="/newsletters" className="hover:text-[#03002B]">Newsletters</a>
          <a href="/contactus" className="hover:text-[#03002B]">Contact Us</a>
        </div>

        {/* Right section (Member button) */}
        <div>
          <button className="bg-[#03002B] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Member ?
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
