import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title={7 * 8} />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
      </div>
    </div>
  );
}
