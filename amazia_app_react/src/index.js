import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
//
import './assets/css/style.css';

// import './vendor/css/bootstrap.css';

import Dashboard from  './components/Dashboard';
import Restaurant from './components/Restaurant';
import NewRestaurant from './components/NewRestaurant';
import EditUser from './components/EditUser';
import EditRestaurant from './components/EditRestaurant';
import Favorites from './components/Favorites';
import Favorite from './components/Favorite';

ReactDom.render(
    <Router history={browserHistory}>
      <Route path='/' component={Dashboard} />
      <Route path='/users/:id/edit' component={EditUser} />
      <Route path='/restaurants/new' component={NewRestaurant} />
      <Route path='/restaurants/new' component={NewRestaurant} />
      <Route path='/restaurants/:id' component={Restaurant} />
      <Route path='/restaurants/:id/edit' component={EditRestaurant} />
      <Route path='users/:id/favorites' component={Favorites} />
      <Route path='users/:id/favorites/:favorites_id' component={Favorite} />
    </Router>
, document.getElementById('app'));
