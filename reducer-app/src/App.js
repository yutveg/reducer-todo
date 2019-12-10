import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>Things To Do: </h1>
      {todoList.map(item => (
        <p>{item.item}</p>
      ))}
      <TodoForm setTodoList={setTodoList} />
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
