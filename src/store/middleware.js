import axios from 'axios';

import {
  HOME_PRODUCTS_SOUGHT,
  homeProductsFetched,
  OFFERS_SOUGHT,
  offersFetched,
} from './reducer';


const middleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case HOME_PRODUCTS_SOUGHT:
      try {
        const { data } = await axios.get(process.env.API_HOME);
        store.dispatch(homeProductsFetched(data));
      }
      catch (error) {
        console.log(error);
      }
      break;
    case OFFERS_SOUGHT:
      const state = store.getState();

      const isbns = state.cartISBNS;

      if (isbns) {
        try {
          const { data: { offers } } = await axios.get(`${process.env.API_HOME}/${isbns}/commercialOffers`);
          store.dispatch(offersFetched(offers));
        }
        catch (error) {
          console.log(error);
        }
      }

      break;
    default:
      next(action);
  }
};

export default middleware;
