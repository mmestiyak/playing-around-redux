import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Products />
        </Route>
        <Route exact path="/cart">
          <Header />
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
