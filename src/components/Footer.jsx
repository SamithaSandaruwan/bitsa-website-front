// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#03002B] text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Column 1: Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/public/BITSA logo rounded.png"
            alt="Bitsa Logo"
            className="h-40" // Adjust the logo size as needed
          />
        </div>

        {/* Column 2: Address Bar */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p>Rajarata University of Sri Lanka,</p>
          <p>Mihintale - 50300, Sri Lanka</p>
        </div>

        {/* Column 3: Contact Us */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2 mb-2">
            <IoCall size={20} />
            <span>(+94) 25-2266645</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoMail size={20} />
            <span>isys@mgt.rjt.ac.lk</span>
          </div>
        </div>

        {/* Column 4: Quick Actions */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/aboutus" className="hover:text-gray-300">About Us</a></li>
            {/* <li><a href="#events" className="hover:text-gray-300">Events</a></li> */}
            {/* <li><a href="#newsletters" className="hover:text-gray-300">Newsletters</a></li> */}
            <li><a href="/contactus" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 5: Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
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
    </footer>
  );
  // return (
  //   <footer className="bg-[#03002B] text-white py-8 px-6">
  //     {/* Footer Content in 4 equal columns */}
  //     <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
  //       {/* Column 1: Social Media Icons */}
  //       <div className="flex justify- space-x mb-6 md:mb-0">
  //         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2">
  //           <FaYoutube size={24} className="text-red-500" />
  //         </a>
  //         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2">
  //           <FaInstagram size={24} className="text-pink-500" />
  //         </a>
  //         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2">
  //           <FaFacebook size={24} className="text-blue-600" />
  //         </a>
  //         <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2">
  //           <FaWhatsapp size={24} className="text-green-500" />
  //         </a>
  //       </div>

  //       {/* Column 2: Address Line 1 */}
  //       <div>
  //         <h3 className="font-semibold text-lg">Address Line 1</h3>
  //         <p>123 Main Street</p>
  //         <p>City, Country</p>
  //       </div>

  //       {/* Column 3: Address Line 2 */}
  //       <div>
  //         <h3 className="font-semibold text-lg">Address Line 2</h3>
  //         <p>456 Secondary Street</p>
  //         <p>Town, Country</p>
  //       </div>


  //       {/* Column 3: Address Line 2 */}
  //       <div>
  //         <h3 className="font-semibold text-lg">Contact Us</h3>
  //         <p>Phone - (+94) 25-2266645</p>
  //         <p>Mail - isys@mgt.rjt.ac.lk</p>
  //       </div>

  //       {/* Column 4: Quick Links */}
  //       <div>
  //         <h3 className="font-semibold text-lg">Quick Links</h3>
  //         <ul className="space-y-2">
  //           <li><a href="#home" className="hover:text-[#03002B]">Home</a></li>
  //           <li><a href="#about-us" className="hover:text-[#03002B]">About Us</a></li>
  //           <li><a href="#events" className="hover:text-[#03002B]">Events</a></li>
  //           <li><a href="#newsletters" className="hover:text-[#03002B]">Newsletters</a></li>
  //           <li><a href="#contact-us" className="hover:text-[#03002B]">Contact Us</a></li>
  //         </ul>
  //       </div>

  //     </div>
  //   </footer>
  // );
};

export default Footer;
