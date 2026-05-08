import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  const navigate = useNavigate();

  const fetchQuote = async () => {
    setLoading(true);
    setFade(false); 

    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      const data = await res.json();


      setTimeout(() => {
        setQuote(data.slip.advice);
        setFade(true); 
        setLoading(false);
      }, 200);

    } catch (error) {
      setTimeout(() => {
        setQuote("Focus on being productive instead of busy.");
        setFade(true);
        setLoading(false);
      }, 200);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-5 rounded-2xl shadow-md text-center">


      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        Daily Motivation 🌐
      </h2>


      <p
        className={`italic text-gray-600 min-h-[50px] transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {loading ? "Loading quote..." : `"${quote}"`}
      </p>


      <button
        onClick={fetchQuote}
        className="mt-3 text-sm text-blue-500 hover:underline"
      >
        🔄 New Quote
      </button>


      <div className="flex justify-between mt-5">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:underline"
        >
          ← Home
        </button>

        <button
          onClick={() => navigate("/tasks")}
          className="text-sm text-blue-500 hover:underline"
        >
          Tasks →
        </button>
      </div>

    </div>
  );
};

export default QuoteBox;