import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { links } from '../../../utils/Apis';

const initialState = {
    listOfImages: [],
    selectedImage: {},
    favoriteImages: [], 
    total: 0,
    isLoading: false
}

export const getImages = createAsyncThunk(
    'image/getImages',
    async (name, thunkAPI) => {
        try {
            const response = await axios.get(links.list);
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!');
        }
    }
)

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        listAll: {

        },
        addNew: {

        },
        edit: {
            
        },
        trash: {

        },
        trashAll: {

        },
        generateTotal: {

        },
        generateTotalFavorites: {

        }
    },
    extraReducers: {
        [getImages.pending] : (state)=> {
            state.isLoading = true;
        },
        [getImages.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.listOfImages = action.payload;
        },
        [getImages.rejected] : (state, action) => {
            state.isLoading = false;
        },
    }
});

export const { listAll, addNew, edit, trash, trashAll, generateTotal, generateTotalFavorites  } = imageSlice.actions;
export default imageSlice.reducer;