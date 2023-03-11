import axios from 'axios';
import { fetchBooks, API_ID } from './GetBooks';

const initialState = {
  added: false,
  error: '',
};

const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE';

const addBookSuccess = () => ({
  type: ADD_BOOK_SUCCESS,
});

const addBookFailure = (error) => ({
  type: ADD_BOOK_FAILURE,
  error,
});

const addBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        added: true,
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        added: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addBooks = (book) => async (dispatch) => {
  const ADD_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;
  try {
    await axios.post(ADD_URL, book);
    dispatch(addBookSuccess());
    dispatch(fetchBooks());
  } catch (error) {
    dispatch(addBookFailure(error.message));
  }
};

export default addBookReducer;
