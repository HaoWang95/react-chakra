import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: "1",
    title: "Use Redux to build a counter",
    content: "Details of how to use Redux to build a global counter",
    date: sub(new Date(), {minutes: 10}).toISOString(),
  },
  {
    id: "2",
    title: "Use Redux + RTK to build a blog",
    content:
      "All posts can be treated as global state with a post data structure",
    date: sub(new Date(), {minutes: 10}).toISOString(),
  },

];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // reducer callback
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
  },
});

export default postsSlice.reducer;