export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD-ITEM":
      return {
        ...state,
        item: state.item,
        completed: false,
        id: Date.now()
      };
    default:
      return state;
  }
};
