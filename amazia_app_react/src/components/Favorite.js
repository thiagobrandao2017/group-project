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
                <img src={this.props.favorite.img_url} width="300"/>
                <h3>{this.props.favorite.restaurant_name}</h3>
                <h3>{this.props.favorite.area}</h3>
                <h5>{this.props.favorite.rating}</h5>
                <p>{this.props.favorite.description}</p>
                <p>{this.props.favorite.address}</p>
                <button>Delete</button>
                <button>Back</button>
            </div>
        );
    }
}

export default Favorite;
