// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeCarousel from "../components/HomeCarousal";

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center  text-[#03002B] py-20 px-12">
        {/* Column 1: Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            BITSA - Business Information Technology Students&apos;
            AssociationDepartment of Information Systems
          </h1>
        </div>

        {/* Column 2: Image */}
        <div className="flex-1">
          <img
            src="https://placehold.co/580x418" // Replace with your image path
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#D9D9D9] py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[50px] font-bold text-[#03002B] mb-8">
            Our Vision and Mission
          </h2>

          {/* Vision and Mission Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Column */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#03002B] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To empower students and professionals to excel in the field of
                technology, fostering innovation, creativity, and leadership.
              </p>
            </div>

            {/* Mission Column */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#03002B] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                Our mission is to provide a platform for collaboration,
                education, and growth that nurtures skills and enhances career
                opportunities in technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HomeCarousel/>


    </>
  );
};

export default Home;
