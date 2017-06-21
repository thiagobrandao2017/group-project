import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

//Application assets
import '/assets/css/style.css';

import NewRestaurant from './components/NewRestaurant';

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/restaurants/new" component={NewRestaurant} />
    </Router>
, document.getElementById("app"));
