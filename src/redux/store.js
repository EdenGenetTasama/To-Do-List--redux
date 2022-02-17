import { createStore } from "redux";
import globalReducers from "../redux/actions/reducers/index";

const storeAll = createStore(globalReducers, {
  todos: [
    { title: "First title", isLog: true },
    { title: "Second title", isLog: false },
  ],
  user:[
    {userName: "Eden" , lastName:"Tasama"}
  ]
});

export default storeAll;
