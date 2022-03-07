import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import postReducer from "../reducers/postSlice";
import userReducer from "../reducers/userSlice";
import pageNumberReducer from "../reducers/pagNumberSlice";

// The root store for redux, global state container
const rootStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
    pageNumber: pageNumberReducer,
  },
});

export default rootStore;
