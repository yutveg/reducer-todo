import React, { useState, useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import { reducer, initialState } from "./reducers/todoReducer.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState("");
  console.log(state.todos);

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: item });
    setItem("");
  };

  return (
    <div className="App">
      <h1>Things To Do: </h1>
      {state.todos.map(item => (
        <p
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
          id={item.id}
          key={item.id}
          onClick={e => {
            dispatch({ type: "TOGGLE_COMPLETE", payload: e.target.id });
          }}
        >
          {item.item}
        </p>
      ))}
      <TodoForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        item={item}
      />
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED" });
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
