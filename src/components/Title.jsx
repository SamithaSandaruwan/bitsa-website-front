// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

const Title = () => {
  return (
    <div className="bg-[#03002B] text-white py-1 px-6 hidden md:block">
      <div className="flex justify-between items-center">
        {/* Left section */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <div className="p-2"><IoCall size={24} color="#fff"/></div>
            <div>(+94) 25-2266645</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2"><IoMail size={24} color="#fff"/></div>
            <div>isys@mgt.rjt.ac.lk</div>
          </div>
        </div>
        
        {/* Right section */}
        <div className="flex">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaYoutube size={24} className="text-red-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaInstagram size={24} className="text-pink-500" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaFacebook size={24} className="text-blue-600" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2">
            <FaWhatsapp size={24} className="text-green-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
