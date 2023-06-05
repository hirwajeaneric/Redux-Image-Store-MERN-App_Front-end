import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { add, list, update, deleteAll, findById, deleteImage, image } from '../../../utils/Apis';

const initialState = {
    listOfImages: [],
    selectedImage: {},
    favoriteImages: [], 
    total: 0,
    isLoading: false
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        add: {

        },
        update: {
            
        },
        delete: {

        },
        deleteAll: {

        },
        generateTotal: {

        },
        generateTotalFavorites: {

        }
    },
    extraReducers: {

    }
});

export default imageSlice.reducer;