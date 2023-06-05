import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/images/imageSlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});
