// == Initial State
const initialState = {
  homeProducts: [],
};

// == Types
export const HOME_PRODUCTS_SOUGHT = 'HOME_PRODUCTS_SOUGHT';
const HOME_PRODUCTS_FETCHED = 'HOME_PRODUCTS_FETCHED';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_PRODUCTS_FETCHED:
      return {
        ...state,
        homeProducts: action.products,
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

// == Export
export default reducer;
