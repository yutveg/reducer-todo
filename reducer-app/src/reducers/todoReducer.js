export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "TOGGLE_COMPLETE":
      console.log(action.payload);
      return {
        todos: state.todos.map(item => {
          console.log(item.id);
          if (item.id === parseInt(action.payload)) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        todos: state.todos.filter(item => item.completed === false)
      };
    default:
      return state;
  }
};
