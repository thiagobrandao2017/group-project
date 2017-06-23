import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Nav from './Nav';
import Favorite from './Favorite';

class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        axios
        .get('https://amazia-app.herokuapp.com/restaurants')
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
                <Nav />

                <div>
                { this.state.favorites.map((favorite) => {
                    return (
                        <Favorite key={favorite.id}
                        favorite={favorite} />
                    );
                }) }
                </div>
            </div>
        );
    }
}

export default Favorites;
