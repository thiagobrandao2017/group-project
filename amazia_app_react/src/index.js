import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import Dashboard from  './components/Dashboard';
import NewRestaurant from './components/NewRestaurant';

ReactDom.render(
    <Router history={browserHistory}>
      <Route path='/' component={Dashboard} />
      <Route path="/restaurants/new" component={NewRestaurant} />
    </Router>
, document.getElementById("app"));
