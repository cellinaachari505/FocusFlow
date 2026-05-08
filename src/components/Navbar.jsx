import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-blue-300 shadow-sm">

      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold cursor-pointer text-gray-800"
      >
        FocusFlow 🚀
      </h1>


      <div className="flex items-center gap-6 text-sm text-gray-600">

  
        <div ref={dropdownRef} className="relative">
          <span
            onClick={() => setOpen(!open)}
            className="hover:text-blue-500 cursor-pointer"
          >
            Made For ▾
          </span>

          {open && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg p-3 w-40 z-10">

              <p
                onClick={() => {
                  navigate("/tasks");
                  setOpen(false);
                }}
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                📝 Tasks
              </p>

              <p
                onClick={() => {
                  navigate("/timer");
                  setOpen(false);
                }}
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                ⏱️ Timer
              </p>

              <p
                onClick={() => {
                  navigate("/stats");
                  setOpen(false);
                }}
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                📊 Stats
              </p>

              <p
                onClick={() => {
                  navigate("/quotes");
                  setOpen(false);
                }}
                className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              >
                🌐 Quotes
              </p>

            </div>
          )}
        </div>

        <button onClick={() => navigate("/login")} className="hover:text-blue-500">
          Login
        </button>

        <button onClick={() => navigate("/contact")} className="hover:text-blue-500">
          Contact
        </button>

        <button onClick={() => navigate("/help")} className="hover:text-blue-500">
          Help
        </button>

      </div>
    </div>
  );
};

export default Navbar;