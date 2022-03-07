import { createSlice } from "@reduxjs/toolkit";

const init = {
  pageNumber: 0,
};

export const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState: init,
  reducers: {
    pageNumberIncrement: (state) => {
      state.pageNumber += 1;
    },
    pageNumberDecrement: (state) => {
      state.pageNumber -= 1;
    },
  },
});

export const { pageNumberIncrement, pageNumberDecrement } =
  pageNumberSlice.actions;

export default pageNumberSlice.reducer;
