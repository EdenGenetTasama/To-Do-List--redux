

const UsersReducer = (state={}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG-IN":
      return payload; 
    default:
      return state;
  }
};

export default UsersReducer;