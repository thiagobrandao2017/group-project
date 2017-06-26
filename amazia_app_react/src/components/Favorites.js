import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import FavoritesList from './FavoritesList';
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

        // <div className="favorites-container" key={favorite.id}>
        // <h1>{favorite.restaurant_name}</h1>
        // <button key={favorite.id} onClick={this.destroyFavorite.bind(this, index, favorite.id)}>
        // Remove Favorite
        // </button>
        // </div>
    render() {
        return(
            <div>
              <Header />
              <div className="container">

                {this.state.favorites.map((favorite, index) => {
                  return (
                      <FavoritesList key={favorite.id} favorite={favorite} destroyFavorite={this.destroyFavorite.bind(this, index, favorite.id)}/>
                  );
                })}
              </div>
              <Footer />
            </div>
        );
    }
}

export default Favorites;
