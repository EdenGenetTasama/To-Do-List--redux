
import { combineReducers } from "redux";
import TodoReducer from "./todos-reducer";

const globalReducers =combineReducers({
    todos: TodoReducer,
    
});

export default globalReducers;