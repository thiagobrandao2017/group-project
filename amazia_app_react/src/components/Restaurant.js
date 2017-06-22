import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Restaurant extends Component {
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
      axios
      .get(`http://amazia-app.herokuapp.com/restaurants/${this.props.params.id}`)
      .then((response) => {
        console.log(response);

        // bc this.state is already an object you don't have to wrap it in curly bracket
        this.setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    render() {
        return(
            <div>
                <img src={this.state.img_url}/>
                <h1>{this.state.restaurant_name}</h1>
                <h3>{this.state.type}</h3>
                <h3>{this.state.area}</h3>
                <h5>{this.state.rating}</h5>
                <p>{this.state.description}</p>
                <p>{this.state.address}</p>
                <button>Like</button>
                <button>Insert View Here</button>
            </div>
        );
    }
}

export default Restaurant;
