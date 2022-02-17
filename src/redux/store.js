import { createStore } from "redux";
import globalReducers from "../redux/reducers/index";
import { applyMiddleware , compose } from "redux";
import thunk from "redux-thunk";


const middleWare = [thunk];


const storeAll = createStore(globalReducers, {
  todos: [
    { title: "First title", isLog: true },
    { title: "Second title", isLog: false },
  ],
  user:[
    {userName: "Eden" , lastName:"Tasama"}
  ]
} , compose(applyMiddleware(...middleWare)));

export default storeAll;
