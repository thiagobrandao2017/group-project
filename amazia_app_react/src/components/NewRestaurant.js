import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

// import Nav from './Nav';

class NewRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
          restaurant_name: '',
          img_url: '',
          type: '',
          address: '',
          description: '',
          rating: '',
          area: '',
        }
    }

    handleSubmit(event) {
      event.preventDefault();

      axios
      .post(`http://amazia-app-api.herokuapp.com/restaurants/`, {
          restaurant: this.state
      })
      .then(() => {
          browserHistory.push('/');
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
      return (
        <div>

          <h2 className="txt-center">Add New Restaurant</h2>

          <div className="container well small-container margin-top-20">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="bold">
                  Restaurant Name
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="restaurant_name" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  Image
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="img_url" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  Type
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="type" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  Address
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="address" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  Description
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="description" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  Rating
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="rating" type="text" className="form-control" />
              </div>
              <div className="bold margin-top-10">
                  NYC Location
              </div>
              <div className="margin-top-10">
                  <input onChange={this.handleChange.bind(this)} name="area" type="text" className="form-control" />
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
