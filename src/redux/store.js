import { createStore } from "redux";

const storeAll = createStore("reducerGlobal", {
  todos: [
    { title: "First title", isLog: true },
    { title: "Second title", isLog: false },
  ],
});

export default storeAll;
