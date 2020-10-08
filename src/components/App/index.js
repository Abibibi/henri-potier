// == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import Home from '../../containers/Home';
import SearchedProducts from '../../containers/SearchedProducts';

// == Composant
const App = () => (
  <div id="app">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={SearchedProducts} />
    </Switch>
  </div>
);

// == Export
export default App;
