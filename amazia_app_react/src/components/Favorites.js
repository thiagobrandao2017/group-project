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

    destroyFavorite(index, favoriteId, event) {
        axios
        .delete(`https://amazia-app.herokuapp.com/favorites/${favoriteId}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
        .then(() => {
            this.state.favorites.splice(index, 1);

            this.setState({
                favorites: this.state.favorites
            });
        })
        .catch((err) => {
            console.log(err);
        });
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

    render() {
        return(
            <div>
                { this.state.favorites.map((favorite, index) => {
                  return (
                    <div key={index}>
                        <h1>{favorite.restaurant_name}</h1>
                        <h2>{index}</h2>
                        <button onClick={this.destroyFavorite(index, favorite.id)}>
                            Remove Favorite
                        </button>
                    </div>
                  );
                }) }
            </div>
        );
    }
}

export default Favorites;
