import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Favorite extends Component {
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
                <p>New York outpost of the San Francisco eatery serving fiery, innovative takes on Sichuan cuisine.</p>
                <p>171 E Broadway, New York, NY 10002</p>
                <button>Delete</button>
                <button>Back</button>
            </div>
        );
    }
}

export default Favorite;
