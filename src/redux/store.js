import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './features/images/imageSlice';
import filterReducer from './features/filter/filterSlice';
import responseReducer from './features/response/responseSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    filter: filterReducer,
    response: responseReducer,
  },
});
