import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Nav from './Nav';

class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        axios
        .get('https://amazia-app.herokuapp.com/favorites', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            const favoritesData = response.data;

            this.setState({
                favorites: favoritesData
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    // <Favorite key={favorite.id} favorite={favorite} />

    render() {
        return(
            <div>
              <div>
              Hi
                {this.state.favorites.map((favorite) => {
                  return (
                    <h1>{favorite.restaurant_name}</h1>
                  );

                })}
              </div>
            </div>
        );
    }
}

export default Favorites;
