import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { add, list, update, deleteAll, findById, deleteImage, image } from '../../utils/Apis';

const initialState = {
    listOfImages: [],
    selectedImage: {},
    filteredImages: [], 
    total: 0,
    isLoading: false
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
});

export default imageSlice.reducer;