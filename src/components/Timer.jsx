import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);


  useEffect(() => {
    const stored = Number(localStorage.getItem("sessions")) || 0;
    setSessions(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("sessions", sessions);
  }, [sessions]);


  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setSessions((prev) => prev + 1);


      const audio = new Audio("/alarm.mp3");
      audio.play();

      alert("Time's up! 🎉");
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);


  const formatTime = (t) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;

    return `${h > 0 ? h + ":" : ""}${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };


const handleSetTime = () => {
  const safeHours = Math.max(0, hours);
  const safeMinutes = Math.min(59, Math.max(0, minutes));
  const totalSeconds = safeHours * 3600 + safeMinutes * 60;

  if (totalSeconds === 0) {
    alert("Enter valid time");
    return;
  }

  setTime(totalSeconds);
  setIsRunning(false);
};

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md text-center">

      <h2 className="text-xl font-bold mb-4">Focus Timer ⏱️</h2>


      <div className="text-4xl font-bold mb-4">
        {formatTime(time)}
      </div>


      <div className="flex justify-center gap-2 mb-4">

      <input
        type="number"
        min="0"
        value={hours}
        onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
        className="w-16 p-2 border rounded text-center"
      />

      <input
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={(e) =>
          setMinutes(Math.min(59, Math.max(0, Number(e.target.value))))
        }
        className="w-16 p-2 border rounded text-center"
      />

        <button
          onClick={handleSetTime}
          className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
        >
          Set
        </button>
      </div>


      <div className="flex justify-center gap-4 mb-4">

        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded text-white ${
            isRunning ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setTime(hours * 3600 + minutes * 60);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>

      </div>


      <p className="text-sm text-gray-500">
        Sessions: {sessions}
      </p>


      <div className="flex justify-between mt-5">
        <button onClick={() => navigate("/tasks")} className="text-sm text-gray-500">
          ← Tasks
        </button>
        <button onClick={() => navigate("/")} className="text-sm text-blue-500">
          Home →
        </button>
      </div>

    </div>
  );
};

export default Timer;