import { useState } from "react";
import TaskInput from "./components/TaskInput"

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskInput tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;