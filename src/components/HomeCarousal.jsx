// eslint-disable-next-line no-unused-vars
import React from 'react';

const HomeCarousel = () => (
    <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

                {/* Column 1: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Event Image"
                        className="w-128 h-128 object-cover rounded-lg" />
                </div>

                {/* Column 2: Event Details */}
                <div className="flex-1 space-y-6">
                    {/* Upcoming Event */}
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-semibold text-[#03002B]">Upcoming Event</h3>
                    </div>

                    {/* Event Name */}
                    <div>
                        <h4 className="text-[50px] font-bold text-[#03002B]">Event Name: Tech Conference 2024</h4>
                    </div>

                    {/* Event Description */}
                    <div>
                        <p className="text-lg text-gray-700">
                            Join us for a groundbreaking event where tech leaders share insights on innovation and the future of technology. Don&apos;t miss out on this incredible opportunity to connect and learn!
                        </p>
                    </div>

                    {/* View More Button */}
                    <div className="text-center flex">
                        <a
                            href="#view-more"
                            className="bg-[#03002B] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HomeCarousel;
