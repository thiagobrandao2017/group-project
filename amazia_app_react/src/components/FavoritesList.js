import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { browserHistory } from 'react-router';
import Nav from './Nav';

class FavoritesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

              <div className="container">

                <h1>{this.props.favorite.restaurant_name}</h1>
                <button onClick={this.props.destroyFavorite}>X</button>
              </div>

            </div>
        );
    }
}

export default FavoritesList;
