// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#03002B] text-white py-8 px-6">
      {/* Footer Content in 4 equal columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Column 1: Social Media Icons */}
        <div className="flex justify- space-x mb-6 md:mb-0">
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

        {/* Column 2: Address Line 1 */}
        <div>
          <h3 className="font-semibold text-lg">Address Line 1</h3>
          <p>123 Main Street</p>
          <p>City, Country</p>
        </div>

        {/* Column 3: Address Line 2 */}
        <div>
          <h3 className="font-semibold text-lg">Address Line 2</h3>
          <p>456 Secondary Street</p>
          <p>Town, Country</p>
        </div>


        {/* Column 3: Address Line 2 */}
        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>Phone - (+94) 25-2266645</p>
          <p>Mail - isys@mgt.rjt.ac.lk</p>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#03002B]">Home</a></li>
            <li><a href="#about-us" className="hover:text-[#03002B]">About Us</a></li>
            <li><a href="#events" className="hover:text-[#03002B]">Events</a></li>
            <li><a href="#newsletters" className="hover:text-[#03002B]">Newsletters</a></li>
            <li><a href="#contact-us" className="hover:text-[#03002B]">Contact Us</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
