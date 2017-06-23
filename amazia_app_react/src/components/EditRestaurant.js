import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import Nav from './Nav';

class EditRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant_name: "",
            img_url: "",
            description: "",
            type: "",
            address: "",
            rating: "",
            user_id: "",
            area: ""
        }
    }

    componentDidMount() {
        axios
        .get(`http://amazia-app.herokuapp.com/restaurants/${this.props.params.id}`)
        .then((response) => {
            console.log(response);

            const restaurantData = response.data

            this.setState(restaurantData);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .put(`http://amazia-app.herokuapp.com/restaurants/${this.props.params.id}`, {
            restaurantData: this.state
        })
        .then(() => {
            browserHistory.push("/");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }



    render() {
        return(
            <div>
                <Nav /><br/>

                <h2>Edit Restaurant</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        Image URL
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="img_url" type="text" value={this.state.img_url} />
                    </div>
                    <div>
                        Restaurant Name
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="restaurant_name" type="text" value={this.state.restaurant_name} />
                    </div>
                    <div>
                        Location in NYC
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="area" type="text" value={this.state.area} />
                    </div>
                    <div>
                        Star Rating
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="rating" type="number" value={this.state.rating} />
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="description" type="text" value={this.state.description} />
                    </div>
                    <div>
                        Address
                    </div>
                    <div>
                        <input onChange={this.handleChange.bind(this)} name="address" type="text" value={this.state.address} />
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default EditRestaurant;
