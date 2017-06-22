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
<<<<<<< HEAD
                <img src={this.state.img_url}/>
                <h1>{this.state.restaurant_name}</h1>
                <h3>{this.state.type}</h3>
                <h3>{this.state.area}</h3>
                <h5>{this.state.rating}</h5>
                <p>{this.state.description}</p>
                <p>{this.state.address}</p>
                <button>Like</button>
=======
                <img src='https://static01.nyt.com/images/2015/09/16/dining/16REST-CASAMONO-slide-AS0C/16REST-CASAMONO-slide-AS0C-master1050.jpg'/>
                <h1>Casa Mono</h1>
                <h3>Spanish Food</h3>
                <h3>Gramercy Park</h3>
                <h5>5 stars</h5>
                <p>Small-bite fans gather at this intimate Gramercy nook for upscale Spanish dishes & a deep wine list.</p>
                <p>52 Irving Pl, New York, NY 10003'</p>
                <button>Like</button> 
>>>>>>> dev
                <button>Insert View Here</button>
            </div>
        );
    }
}

export default Restaurant;
