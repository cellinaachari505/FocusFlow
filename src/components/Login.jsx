import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }


    localStorage.setItem("user", JSON.stringify({ email }));

    alert("Login successful 🎉");

    navigate("/tasks");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Login 🔐
        </h2>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>


        <p
          onClick={() => navigate("/")}
          className="text-sm text-center text-gray-500 mt-3 cursor-pointer hover:underline"
        >
          ← Back to Home
        </p>
      </form>

    </div>
  );
};

export default Login;