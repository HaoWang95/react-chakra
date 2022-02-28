import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import postReducer from "../reducers/postSlice";
import userReducer from "../reducers/userSlice";

// The root store for redux, global state container
const rootStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
  },
});

export default rootStore;
