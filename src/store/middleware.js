import axios from 'axios';

import {
  HOME_PRODUCTS_SOUGHT,
  homeProductsFetched
} from './reducer';


const middleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case HOME_PRODUCTS_SOUGHT:

      try {
        const productsFetched = await axios.get(process.env.API_HOME);
        console.log(productsFetched);
      }
      catch (error) {
        console.log(error);
      }
      break;
      // axios.get(url)
      //   .then(response => {
      //     // Ici tu sais que tu as obtenu avec succès ta réponse
      //     // Tu peux la récupérer dans response.data
      //     const { data } = response.
      //     // Il faut ensuite informer le reducer des nouvelles données reçues
      //     store.dispatch(receivedQqchose(data));
      //   })
      //   .catch();
    default:
      next(action);
  }
};

export default middleware;
