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

    destroyFavorite(index, favoriteId) {
            console.log(index);
            console.log(favoriteId);
            axios
            .delete(`https://amazia-app.herokuapp.com/favorites/${favoriteId}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
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

    render() {
        return(
            <div>
              <div>
              Hi
                {this.state.favorites.map((favorite, index) => {
                  return (
                    <div>
                      <h1>{favorite.restaurant_name}</h1>
                      <button onClick={this.destroyFavorite(index, favorite.id)}>
                              Remove Favorite
                      </button>
                    </div>
                  );

                })}
              </div>
            </div>
        );
    }
}

export default Favorites;
