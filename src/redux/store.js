import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import personReducer from './personSlice';
import blogsReducer from "./blogsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    team: personReducer,
    blogs: blogsReducer
  },
});
