import axios from 'axios';
import { fetchBooks, API_ID } from './GetBooks';

const initialState = {
  removed: false,
  error: '',
};

const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAILURE = 'REMOVE_BOOK_FAILURE';

const removeBookSuccess = () => ({
  type: REMOVE_BOOK_SUCCESS,
});

const removeBookFailure = (error) => ({
  type: REMOVE_BOOK_FAILURE,
  error,
});

const removeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        removed: true,
      };
    case REMOVE_BOOK_FAILURE:
      return {
        ...state,
        removed: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const removeBooks = (id) => async (dispatch) => {
  const DELETE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/${id}`;

  try {
    await axios.delete(DELETE_URL);
    dispatch(removeBookSuccess());
    dispatch(fetchBooks());
  } catch (error) {
    dispatch(removeBookFailure(error.message));
  }
};

export default removeBookReducer;
