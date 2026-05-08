import React from "react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          How to Use FocusFlow
        </h1>

        <div className="space-y-6 text-gray-700">
          
          <div>
            <h2 className="font-semibold text-lg">1. Login</h2>
            <p>Enter your credentials to access the dashboard.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">2. Start Timer</h2>
            <p>Use the timer to begin a focused work session.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">3. Take Breaks</h2>
            <p>Follow the break alerts to maintain productivity.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">4. Track Progress</h2>
            <p>Monitor your completed sessions and stay consistent.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">5. Contact Support</h2>
            <p>Use the contact page if you face any issues.</p>
          </div>

        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}