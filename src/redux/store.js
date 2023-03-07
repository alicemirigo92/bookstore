import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/bookSlice';
import categoryReducer from './Categories/categorySlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
  },
});
export default store;
