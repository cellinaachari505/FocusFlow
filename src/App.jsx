import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import Stats from "./components/Stats";
import QuoteBox from "./components/QuoteBox";
import Timer from "./components/Timer";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Help from "./components/Help";

function App() {
  return (
    <Routes>


      <Route path="/" element={<Home />} />


      <Route path="/tasks" element={<TaskList />} />
      <Route path="/add" element={<TaskInput />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/quotes" element={<QuoteBox />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<Help />} />


      <Route path="/login" element={<h1 className="p-6">Login Page</h1>} />
      <Route path="/contact" element={<h1 className="p-6">Contact Page</h1>} />
      <Route path="/help" element={<h1 className="p-6">Help Page</h1>} />

    </Routes>
  );
}

export default App;