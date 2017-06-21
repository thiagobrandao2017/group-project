import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Restaurants extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src='https://media.timeout.com/images/100453571/image.jpg'/>
                <h1>Mission Chinese</h1>
                <h3>Chinese Food</h3>
                <h3>Lower East Side</h3>
                <h5>5 stars</h5>
                <button>like</button>
                <button>Insert View Here</button>
            </div>
        );
    }
}

export default Restaurants;
