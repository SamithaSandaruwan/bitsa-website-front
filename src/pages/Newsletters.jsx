// eslint-disable-next-line no-unused-vars
import React from 'react';

const Newsletters = () => {
  const newsletters = [
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2024 - Tech Trends",
      year: 2024,
    },
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2024 - AI Insights",
      year: 2024,
    },
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2024 - Blockchain Basics",
      year: 2024,
    },
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2023 - Innovations in Tech",
      year: 2023,
    },
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2023 - Future of Work",
      year: 2023,
    },
    {
      imageUrl: "https://placehold.co/345x470",
      name: "Newsletter 2023 - AI and Society",
      year: 2023,
    },
  ];

  return (
    <div className="py-16 px-6">
      {/* Newsletters Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#03002B] border-b-4 border-[#03002B] inline-block">
          Newsletters
        </h2>
      </div>

      {/* Newsletter List (Grid Layout) */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {newsletters.map((newsletter, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Newsletter Image */}
            <div className="w-full h-[470px] bg-gray-300 rounded-lg overflow-hidden">
              <img
                src={newsletter.imageUrl}
                alt={newsletter.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Newsletter Name */}
            <div className="text-center text-xl font-semibold text-[#03002B]">
              {newsletter.name}
            </div>

            {/* Published Year */}
            <div className="text-center text-lg text-gray-600">
              Published Year: {newsletter.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;