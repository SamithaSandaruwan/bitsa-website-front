// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactUS = () => {
  return (
    <div className="py-16 px-6">
      {/* Contact Us Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#03002B] border-b-4 border-[#03002B] inline-block">
          Contact Us
        </h2>
      </div>

      {/* Contact Details */}
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Reach out to us via any of the methods
          below.
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="text-lg text-gray-700">
            <strong>Address:</strong> Rajarata University of Sri Lanka, Mihintale (50300), Sri Lanka.
          </div>
          <div className="text-lg text-gray-700">
            <strong>Phone:</strong> (+94) 25-2266645
          </div>
          <div className="text-lg text-gray-700">
            <strong>Email:</strong> isys@mgt.rjt.ac.lk
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.4146303212847!2d80.50076197406031!3d8.36080869909227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc8a63370239cb%3A0xfde408ba97b0d4d3!2sRajarata%20University%20of%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1733853558969!5m2!1sen!2slk"
            width="100%"
            height="800"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
