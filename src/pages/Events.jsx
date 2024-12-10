// eslint-disable-next-line no-unused-vars
import React from "react";

const Events = () => {
  const events = [
    {
      name: "Tech Conference 2024",
      description:
        "Join us for a groundbreaking event where tech leaders share insights on innovation and the future of technology.",
      imageUrl: "https://placehold.co/450x350",
    },
    {
      name: "AI Summit 2024",
      description:
        "The AI Summit will bring together innovators, thought leaders, and entrepreneurs to discuss AI's impact on industries.",
      imageUrl: "https://placehold.co/450x350",
    },
    {
      name: "Blockchain Revolution",
      description:
        "Learn about the latest advancements in blockchain technology and how it is changing the future of finance and business.",
      imageUrl: "https://placehold.co/450x350",
    },
  ];

  return (
    <div className="py-16 px-6">
      {/* Events Title */}
      <div className="text-center mb-16">
        <h2 className="text-[60px] font-bold text-[#03002B] border-b-4 border-[#03002B] inline-block">
          Events
        </h2>
      </div>

      {/* Event List */}
      <div className="max-w-screen-xl mx-auto space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-4"
          >
            {/* Event Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1 space-y-6">
              {/* Event Name */}
              <div>
                <h4 className="text-[50px] font-bold text-[#03002B]">
                  Event Name: Tech Conference 2024
                </h4>
              </div>

              {/* Event Description */}
              <div>
                <p className="text-lg text-gray-700">
                  Join us for a groundbreaking event where tech leaders share
                  insights on innovation and the future of technology.
                  Don&apos;t miss out on this incredible opportunity to connect
                  and learn!
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
        ))}
      </div>
    </div>
  );
};

export default Events;
