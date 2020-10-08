import axios from 'axios';

import {
  HOME_PRODUCTS_SOUGHT,
  homeProductsFetched,
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
    default:
      next(action);
  }
};

export default middleware;
