import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
//
import './assets/css/style.css';

import Dashboard from  './components/Dashboard';
import NewRestaurant from './components/NewRestaurant';
import EditUser from './components/EditUser';

ReactDom.render(
    <Router history={browserHistory}>
      <Route path='/' component={Dashboard} />
      <Route path='/users/:id/edit' component={EditUser} />
      <Route path='/restaurants/new' component={NewRestaurant} />
    </Router>
, document.getElementById('app'));
