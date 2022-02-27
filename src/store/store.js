import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import postReducer from "../reducers/postSlice";

// The root store for redux, global state container
const rootStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer
  },
});

export default rootStore;
