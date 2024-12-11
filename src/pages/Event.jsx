// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // If using React Router

const Event = () => {
  const { eventId } = useParams(); // Dynamic route parameter
  const event = {
    id: eventId,
    title: 'Tech Conference 2024',
    date: 'June 15, 2024',
    location: 'Grand Hall, City Center',
    description: `Join us for an inspiring tech conference where leaders in the field will share their insights on innovation, AI, and the future of technology. This is a unique opportunity to connect, learn, and grow.`,
    image: 'https://placehold.co/600x400',
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Event Image */}
        <div className="flex justify-center mb-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full md:w-3/4 rounded-lg"
          />
        </div>

        {/* Event Title */}
        <h1 className="text-4xl font-bold text-[#03002B] mb-4 text-center">{event.title}</h1>

        {/* Event Date and Location */}
        <div className="text-gray-600 text-center mb-6">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>

        {/* Event Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.description}</p>

        {/* Back to Events Button */}
        <div className="text-center">
          <Link to="/events">
            <button className="bg-[#03002B] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Back to Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
