import React from 'react';

const Stats = ({ tasks, sessions }) => {
    
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const completionRate = totalTasks > 0 
    ? Math.round((completedTasks / totalTasks) * 100) 
    : 0;

  return (
    <div className="stats-grid" style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr' }}>
      <div className="stat-card" style={cardStyle}>
        <span>Total</span>
        <h2>{totalTasks}</h2>
      </div>
      <div className="stat-card" style={cardStyle}>
        <span>Done</span>
        <h2>{completedTasks}</h2>
      </div>
      <div className="stat-card" style={cardStyle}>
        <span>Sessions</span>
        <h2>{sessions} ⏱️</h2>
      </div>
      <div className="stat-card" style={{...cardStyle, backgroundColor: '#e3f2fd'}}>
        <span>Score</span>
        <h2>{completionRate}%</h2>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '15px',
  borderRadius: '12px',
  background: '#f8f9fa',
  textAlign: 'center',
  border: '1px solid #eee'
};

export default Stats;