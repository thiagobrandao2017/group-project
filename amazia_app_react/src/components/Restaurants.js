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
                <img src='https://static01.nyt.com/images/2015/09/16/dining/16REST-CASAMONO-slide-AS0C/16REST-CASAMONO-slide-AS0C-master1050.jpg'/>
                <h1>Casa Mono</h1>
                <h3>Spanish Food</h3>
                <h3>Gramercy Park</h3>
                <h5>5 stars</h5>
                <button>like</button>
                <button>Insert View Here</button>
            </div>
        );
    }
}

export default Restaurants;
