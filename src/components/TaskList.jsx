import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };


  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };


  const clearAllTasks = () => {
    if (tasks.length === 0) return;

    const confirmClear = window.confirm("Are you sure you want to delete all tasks?");
    if (confirmClear) {
      setTasks([]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-5 rounded-2xl shadow-md">


      <h2 className="text-xl font-bold text-center text-gray-700 mb-2">
        Your Tasks 📝
      </h2>


      <p className="text-sm text-gray-500 text-center mb-4">
        {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
      </p>


      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          No tasks yet. Start by adding one!
        </p>
      ) : (
        <ul className="space-y-3">

          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-xl"
            >

              <span
                onClick={() => toggleComplete(task.id)}
                className={`flex-1 cursor-pointer transition ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {task.text}
              </span>


              <div className="flex gap-2 ml-3">

                <button
                  onClick={() => toggleComplete(task.id)}
                  className="text-green-500 text-sm hover:underline"
                >
                  ✔
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  ✖
                </button>

              </div>
            </li>
          ))}

        </ul>
      )}

      {/* Clear All Button */}
      <button
        onClick={clearAllTasks}
        disabled={tasks.length === 0}
        className={`mt-4 w-full text-sm py-2 rounded-lg transition ${
          tasks.length === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-red-100 text-red-500 hover:bg-red-200"
        }`}
      >
        Clear All Tasks
      </button>


      <div className="flex justify-between mt-5">

          {/* Go Home */}
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-500 hover:underline"
          >
            ← Home
          </button>

          {/* Add Task */}
          <button
            onClick={() => navigate("/add")}
            className="text-sm text-blue-500 hover:underline"
          >
            + Add Task
          </button>

          {/* Stats */}
          <button
            onClick={() => navigate("/stats")}
            className="text-sm text-blue-500 hover:underline"
          >
            Stats →
          </button>

        </div>

    </div>
  );
};

export default TaskList;