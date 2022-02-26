import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

// The root store for redux, global state container
const rootStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default rootStore;
