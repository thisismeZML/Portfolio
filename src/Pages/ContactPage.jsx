import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="text-white min-h-[calc(100vh-15rem)] bg-primary flex flex-col lg:flex-row items-center justify-center container mb-8 lg:mb-0">
      <div className=" w-full grid lg:grid-cols-2 gap-8">
        {/* Left Section - Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Contact Me!
          </h2>
          <p className="text-gray-400 mb-6">
            I am open to new opportunities and collaborations. Feel free to
            reach out if you have a project, job offer, or any inquiries.
          </p>

          <form className="space-y-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {/* Dropdown
            <select
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select> */}
            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent-hover transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col justify-center border-r border-accent space-y-6 text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="bg-accent p-3 rounded-full">
              <FaPhoneAlt className="h-6 w-6 text-black" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Phone</p>
              <p>(+959) 784 063 395</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-accent p-3 rounded-full">
              <MdEmail className="h-6 w-6 text-black" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Email</p>
              <p>thatismetheoneudunknow@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-accent p-3 rounded-full">
              <FaLocationDot className="h-6 w-6 text-black" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Address</p>
              <p>Building (D), Room (28), Mayangone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
