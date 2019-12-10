import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/todoReducer.js";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState("");

  const handleChange = e => {
    setItem(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Input item.."
        value={item}
        onChange={handleChange}
      />
      <button
        onClick={e => {
          e.preventDefault();
          dispatch({ type: "ADD-ITEM", payload: item });
        }}
      >
        Add Item
      </button>
    </form>
  );
};

export default TodoForm;
