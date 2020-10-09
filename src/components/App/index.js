// == Import : npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import Home from '../../containers/Home';
import SearchedProducts from '../../containers/SearchedProducts';
import Cart from '../../containers/Cart';

// == Composant
const App = ({ homeProductsCalled }) => {
  useEffect(() => {
    homeProductsCalled();
  }, []);

  return (
    <div id="app">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={SearchedProducts} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  );
};

// == Export
export default App;
