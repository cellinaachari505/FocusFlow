import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />


      <div className="flex flex-col items-center justify-center text-center mt-16 px-6">

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          FocusFlow 
        </h1>

        <p className="text-gray-600 max-w-2xl text-lg mb-8">
          FocusFlow is a smart productivity web application designed to help
          students and professionals manage study sessions, organize tasks,
          track productivity, and stay motivated—all in one place.
        </p>


      </div>


      <div className="max-w-6xl mx-auto mt-20 px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          ✨ Core Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              ⏱️ Study Timer
            </h3>

            <p className="text-gray-600">
              Start, pause, and reset Pomodoro study sessions to improve focus
              and productivity.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              📝 Task Management
            </h3>

            <p className="text-gray-600">
              Add tasks, organize your workflow, and mark completed tasks
              efficiently.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              📊 Productivity Stats
            </h3>

            <p className="text-gray-600">
              Track completed tasks, study sessions, and monitor overall
              productivity.
            </p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              🌐 Motivation Quotes
            </h3>

            <p className="text-gray-600">
              Stay inspired with motivational quotes fetched dynamically using
              APIs.
            </p>
          </div>

        </div>

      </div>


      <div className="max-w-4xl mx-auto mt-20 px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🎯 How FocusFlow Works
        </h2>

        <p className="text-gray-600 text-lg leading-8">
          Users can start a focused study session using the Pomodoro timer,
          create tasks to complete during the session, track their progress
          through statistics, and stay motivated with inspirational quotes.
          FocusFlow combines time management and task management into a single
          clean and user-friendly platform.
        </p>

      </div>


      <div className="mt-20 py-6 text-center text-gray-500 border-t">
        Built with React, Tailwind CSS, and teamwork 💙
      </div>

    </div>
  );
};

export default Home;


