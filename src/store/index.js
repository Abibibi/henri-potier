// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from './reducer';
import middleware from './middleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    middleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
