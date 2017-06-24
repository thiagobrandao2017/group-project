import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Favorite extends Component {
    constructor(props) {
      super(props);

      this.state = {
        restaurant_name: '',
        img_url: '',
        type: '',
        address: '',
        description: '',
        rating: 0,
        area: '',
      }
    }

    componentDidMount() {
      console.log(this.props.params.id);
      axios
      .get(`http://amazia-app.herokuapp.com/favorites/${this.props.params.id}`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      })
      .then((response) => {
        console.log(response);
        
        this.setState(response.data);
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
