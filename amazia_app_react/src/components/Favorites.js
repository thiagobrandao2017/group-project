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
        event.preventDefault();

        axios
        .delete(`http://amazia-app.herokuapp.com/users/${this.props.user.id}/favorites/${favoriteId}`, {
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
              <div>
              Hi

                { this.state.favorites.map((favorite) => {
                  return (
                      <h1>{favorite.restaurant_name}</h1>
                      <button onClick=this.destroyFavorite}>X</button>
                  );
                }) }
              </div>
            </div>
        );
    }
}

export default Favorites;
