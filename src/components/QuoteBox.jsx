import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      setQuote("Focus on being productive instead of busy.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ marginTop: '20px', padding: '15px', textAlign: 'center' }}>
      <p style={{ fontStyle: 'italic', color: '#555', minHeight: '40px' }}>
        {loading ? " Fetching motivation..." : `"${quote}"`}
      </p>
      <button 
        onClick={fetchQuote}
        style={{ fontSize: '12px', cursor: 'pointer', border: 'none', background: 'none', color: '#007bff' }}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;