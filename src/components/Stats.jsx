import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState(0);


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedSessions = Number(localStorage.getItem("sessions")) || 0;

    setTasks(storedTasks);
    setSessions(storedSessions);
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  const completionRate =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;


  const getScoreColor = () => {
    if (completionRate >= 75) return "text-green-600";
    if (completionRate >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-5 rounded-2xl shadow-md">


      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
        Your Progress 📊
      </h2>


      <div className="grid grid-cols-2 gap-3">


        <div className="p-4 bg-gray-100 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-xl font-bold">{totalTasks}</h2>
        </div>


        <div className="p-4 bg-gray-100 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Done</p>
          <h2 className="text-xl font-bold">{completedTasks}</h2>
        </div>


        <div className="p-4 bg-gray-100 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Sessions</p>
          <h2 className="text-xl font-bold">{sessions} ⏱️</h2>
        </div>


        <div className="p-4 bg-blue-100 rounded-xl text-center shadow-sm">
          <p className="text-sm text-gray-500">Score</p>
          <h2 className={`text-xl font-bold ${getScoreColor()}`}>
            {completionRate}%
          </h2>
        </div>

      </div>


      <p className="text-center text-sm text-gray-500 mt-4">
        {totalTasks === 0
          ? "Start adding tasks to track progress 🚀"
          : completionRate >= 75
          ? "Great job! You're very productive 🔥"
          : completionRate >= 40
          ? "Good progress, keep going 💪"
          : "Try to complete more tasks today 📈"}
      </p>


      <div className="flex justify-between mt-5">

        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:underline"
        >
          ← Add Task
        </button>

        <button
          onClick={() => navigate("/tasks")}
          className="text-sm text-blue-500 hover:underline"
        >
          View Tasks →
        </button>

      </div>

    </div>
  );
};

export default Stats;