
import { combineReducers } from "redux";
import TodoReducer from "../reducers/todos-reducer";
import UsersReducer from "../reducers/users-reducer";

const globalReducers =combineReducers({
    todos: TodoReducer,
    user: UsersReducer
});

export default globalReducers;