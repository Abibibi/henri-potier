// == Initial State
const initialState = {
  homeProducts: [],
  search: '',
  cartProducts: [],
  subtotal: 0,
  cartISBNS: '',
  bestOffer: {},
};

// == Types
export const HOME_PRODUCTS_SOUGHT = 'HOME_PRODUCTS_SOUGHT';
const HOME_PRODUCTS_FETCHED = 'HOME_PRODUCTS_FETCHED';
const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED';
const PRODUCTS_IN_CART = 'PRODUCTS_IN_CART';
const SUBTOTAL_ISBNS_SAVED = 'SUBTOTAL_ISBNS_SAVED';
export const OFFERS_SOUGHT = 'OFFERS_SOUGHT';
const OFFERS_FETCHED = 'OFFERS_FETCHED';

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
    case PRODUCTS_IN_CART:
      return {
        ...state,
        cartProducts: action.products,
      };
    case SUBTOTAL_ISBNS_SAVED:
      return {
        ...state,
        subtotal: action.subtotal,
        cartISBNS: action.isbns,
      };
    case OFFERS_FETCHED:
      return {
        ...state,
        bestOffer: action.bestOffer,
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

export const productsInCart = (products) => ({
  type: PRODUCTS_IN_CART,
  products,
});

export const subtotalAndISBNSSaved = (subtotal, isbns) => ({
  type: SUBTOTAL_ISBNS_SAVED,
  subtotal,
  isbns,
});

export const offersSought = () => ({
  type: OFFERS_SOUGHT,
});

export const offersFetched = (bestOffer) => ({
  type: OFFERS_FETCHED,
  bestOffer,
});

// == Export
export default reducer;
