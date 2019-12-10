import React from "react";

const TodoForm = ({ handleSubmit, handleChange, item }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input item.."
        value={item}
        onChange={handleChange}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default TodoForm;
