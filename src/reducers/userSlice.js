import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: 'alwang'},
    {id:'1', name: 'josh'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
});

export default usersSlice.reducer;