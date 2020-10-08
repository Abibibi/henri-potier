// == Initial State
const initialState = {
  homeProducts: [],
  search: '',
};

// == Types
export const HOME_PRODUCTS_SOUGHT = 'HOME_PRODUCTS_SOUGHT';
const HOME_PRODUCTS_FETCHED = 'HOME_PRODUCTS_FETCHED';
const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED';
const PRODUCTS_SEARCHED = 'PRODUCTS_SEARCHED';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_PRODUCTS_FETCHED:
      return {
        ...state,
        homeProducts: action.products,
      };
    case SEARCH_INPUT_CHANGED:
      return {
        ...state,
        search: action.value,
      };
    case PRODUCTS_SEARCHED:
      return {
        ...state,
        productsResults: action.products,
      };
    default:
      return state;
  }
};

// == Action Creators
export const homeProductsSought = () => ({
  type: HOME_PRODUCTS_SOUGHT,
});

export const homeProductsFetched = (products) => ({
  type: HOME_PRODUCTS_FETCHED,
  products,
});

export const searchInputChanged = (value) => ({
  type: SEARCH_INPUT_CHANGED,
  value,
});

// == Export
export default reducer;
