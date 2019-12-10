import React, { useState, useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import { reducer, initialState } from "./reducers/todoReducer.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoList, setTodoList] = useState([]);
  console.log(state);
  return (
    <div className="App">
      <h1>Things To Do: </h1>
      {state.todos.map(item => (
        <p key={item.id}>{item.item}</p>
      ))}
      <TodoForm setTodoList={setTodoList} />
      <button>Clear Completed</button>
    </div>
  );
}

export default App;
