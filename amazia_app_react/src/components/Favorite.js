import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Favorite extends Component {
    constructor(props) {
      super(props);

      this.state = {
        restaurant_name: '',
        img_ur: '',
        description: '',
        type: '',
        address: '',
        rating: '',
        user_id: '',
        area: ''
      }
    }

    componentDidMount() {
      axios
      .get(`http://amazia-app.herokuapp.com/users/${this.props.user.id}/favorites/${this.props.favorite.id}`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      })
      .then((response) => {
        const favoriteData = response.data;

        this.setState({
            favorite: favoriteData
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }

    render() {
        return(
            <div>
                <h1>{this.state.restaurant_name}</h1>
            </div>
        );
    }
}

export default Favorite;
