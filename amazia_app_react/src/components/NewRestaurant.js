import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

// import Nav from './Nav';

class NewRestaurant extends Component {
    constructor(props) {
        super(props);
        //
        // this.state = {
        //     restaurant_name: "",
        //     img: "",
        //     type: "",
        //     address: "",
        //     desc: "",
        //     ratings: "",
        //     creator: "",
        //     area: ""
        // }
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //
    //     axios
    //     .post(`http://amazia-app-api.herokuapp.com/restaurants/`, {
    //         restaurant: this.state
    //     })
    //     .then(() => {
    //         browserHistory.push("/");
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }
    //
    // handleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    render() {
        return(
            <div>

                <h2 className="txt-center">Add Restaurant</h2>
                <h5 className="txt-center">for Thiago</h5>

                <div className="container well small-container margin-top-20">
                  <form>
                    <div className="bold">
                        Restaurant Name
                    </div>
                    <div className="margin-top-10">
                        <input name="restaurant_name" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Image
                    </div>
                    <div className="margin-top-10">
                        <input name="img" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Type
                    </div>
                    <div className="margin-top-10">
                        <input name="type" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Address
                    </div>
                    <div className="margin-top-10">
                        <input name="address" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Description
                    </div>
                    <div className="margin-top-10">
                        <input name="desc" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Rating
                    </div>
                    <div className="margin-top-10">
                        <input name="rating" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        Created By
                    </div>
                    <div className="margin-top-10">
                        <input name="created_by" type="text" className="form-control" />
                    </div>
                    <div className="bold margin-top-10">
                        NYC Location
                    </div>
                    <div className="margin-top-10">
                        <input name="location" type="text" className="form-control" />
                    </div>
                    <div className="margin-top-20 txt-center">
                        <button type="submit" className="btn btn-primary">Submit Restaurant</button>
                    </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default NewRestaurant;
