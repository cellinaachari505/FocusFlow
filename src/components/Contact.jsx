import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea rows="4" placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
            Send Message
          </button>
        </form>


        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-blue-500 hover:underline font-medium"
          >
            ← Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
}