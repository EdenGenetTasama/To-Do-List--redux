import todosTypes from "../../types";

const TodoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case todosTypes.ADD_TODO:
      return [...state, payload];
      break;
    // case todosTypes.UPDATE_TODO:
    //   break;
    // case todosTypes.DELETE_TODO:
    //   break;
    default:
      break;
  }
};

export default TodoReducer;
