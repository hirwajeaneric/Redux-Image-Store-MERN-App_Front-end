import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
});

export default filterSlice.reducer;