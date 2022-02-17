
import { combineReducers } from "redux";
import TodoReducer from "./todos-reducer";
import UsersReducer from "./users-reducer";

const globalReducers =combineReducers({
    todos: TodoReducer,
    user: UsersReducer
});

export default globalReducers;