import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Use Redux to build a counter', content: 'Details of how to use Redux to build a global counter'},
    {id: '2', title: 'Use Redux + RTK to build a blog', content: 'All posts can be treated as global state with a post data structure'},
];

export const postsSlice = createSlice({
    name:'posts',
    initialState: initialState,
    reducers: {

    }
});

export default postsSlice.reducer;