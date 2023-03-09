import { createReducer } from '@reduxjs/toolkit';

export const ADDA_BOOK = 'redux/Books/Add_Book';
export const REMOVEA_BOOK = 'redux/Books/Remove_Book';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
  ],
};

export const addBook = (book) => ({
  type: ADDA_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVEA_BOOK,
  payload: id,
});

const bookReducer = createReducer(initialState, {
  [ADDA_BOOK]: (state, action) => {
    state.books.push(action.payload);
  },
  [REMOVEA_BOOK]: (state, action) => {
    const filteredBooks = state.books.filter((book) => book.id !== action.payload);
    return { ...state, books: filteredBooks };
  },

});

export default bookReducer;
