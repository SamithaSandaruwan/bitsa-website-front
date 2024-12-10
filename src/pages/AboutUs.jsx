// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutUs = () => {
  return (
    <div className="py-16 px-6">
      {/* About Us Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#03002B] border-b-4 border-[#03002B] inline-block">
          About Us
        </h2>
      </div>

      {/* About Us Description */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700">
          We are an organization dedicated to bringing innovation and technology
          to the forefront. Our team works tirelessly to create groundbreaking
          solutions and provide valuable services to our clients. Join us as we
          explore new horizons in the world of technology and business.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="About Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
