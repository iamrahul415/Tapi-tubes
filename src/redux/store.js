import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import personReducer from './personSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    team: personReducer,
  },
});
