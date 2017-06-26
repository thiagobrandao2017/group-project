import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import './assets/css/style.css';
import hamburger from './assets/css/hamburger.css';
import script from './assets/script/script.js';

import Dashboard from  './components/Dashboard';
import GuestDashboard from  './components/GuestDashboard';
import Restaurant from './components/Restaurant';
import NewRestaurant from './components/NewRestaurant';
import EditRestaurant from './components/EditRestaurant';
import Favorites from './components/Favorites';
import Favorite from './components/Favorite';
import Signup from './components/Signup';
import Login from './components/Login';

const restrict = () => {
    if (!window.localStorage.getItem('token')) {
        browserHistory.push('/guest');
    }
}

ReactDom.render(
    <Router history={browserHistory}>
      <Route path='/' component={Dashboard} onEnter={restrict} />
      <Route path='/guest' component={GuestDashboard} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/favorites' component={Favorites} onEnter={restrict} />
      <Route path='/favorites/:id' component={Favorite} onEnter={restrict} />
      <Route path='/restaurants/new' component={NewRestaurant} onEnter={restrict} />
      <Route path='/restaurants/new' component={NewRestaurant} onEnter={restrict} />
      <Route path='/restaurants/:id' component={Restaurant} onEnter={restrict} />
      <Route path='/restaurants/:id/edit' component={EditRestaurant} onEnter={restrict} />
    </Router>
, document.getElementById('app'));
