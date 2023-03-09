export const CHECK_STATUS = 'BookStore-App/Categories/CHECK_STATUS';

const initialState = {
  categories: '',
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: 'under construction',
      };
    default:
      return state;
  }
};

export default categoryReducer;
