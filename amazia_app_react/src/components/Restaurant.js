import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Restaurant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src='https://static01.nyt.com/images/2015/09/16/dining/16REST-CASAMONO-slide-AS0C/16REST-CASAMONO-slide-AS0C-master1050.jpg'/>
                <h1>Casa Mono</h1>
                <h3>Spanish Food</h3>
                <h3>Gramercy Park</h3>
                <h5>5 stars</h5>
                <p>Small-bite fans gather at this intimate Gramercy nook for upscale Spanish dishes & a deep wine list.</p>
                <p>52 Irving Pl, New York, NY 10003'</p>
                <button>Like</button>
                <button>Insert View Here</button>
            </div>
        );
    }
}

export default Restaurant;
