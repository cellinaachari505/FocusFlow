import React, { useState } from 'react';
import Stats from './components/Stats';
import Quote from './components/QuoteBox';

function App() {
  const [tasks, setTasks] = React.useState([]); // Member 2 updates this
  const [sessions, setSessions] = React.useState(0); // Member 1 updates this

  return (
    <div className="container">
      {/* ... Timer and TaskList go here ... */}
      
      <hr />
      <h2>Your Progress</h2>
      <Stats tasks={tasks} sessions={sessions} />
      <Quote />
    </div>
  );
}
export default App;