import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task.trim() === "") return;


    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    const updatedTasks = [...existingTasks, newTask];


    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTask("");


    navigate("/tasks");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Add New Task
      </h1>

      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />

      <button
        onClick={handleAddTask}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Task
      </button>

      <button
        onClick={() => navigate("/tasks")}
        className="w-full mt-2 text-sm text-gray-500 hover:underline"
      >
        View Tasks →
      </button>
    </div>
  );
};

export default TaskInput;