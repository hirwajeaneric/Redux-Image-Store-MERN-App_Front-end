import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    severity: ''
}

const responseSlice = createSlice({
    name: 'response',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
});

export default responseSlice.reducer;