import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Favorite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant_name: '',
            img_url: '',
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
        .get(`https://amazia-app.herokuapp.com/favorites`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            this.setState(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }



    render() {
        return(
            <div>
                <img src={this.state.favorite.img_url}/>
                <h3>{this.state.favorite.restaurant_name}</h3>
                <h3>{this.state.favorite.area}</h3>
                <h5>{this.state.favorite.rating}</h5>
                <p>{this.state.favorite.description}</p>
                <p>{this.state.favorite.address}</p>
                <button>Delete</button>
                <button>Back</button>
            </div>
        );
    }
}

export default Favorite;
