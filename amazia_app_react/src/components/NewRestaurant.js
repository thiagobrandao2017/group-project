import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Dropdown } from 'react-bootstrap';
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
          rating: 0,
          area: '',
        }
    }

    componentDidMount() {
      window.scrollTo(0,0);
    }

    handleSubmit(event) {
      event.preventDefault();

      axios
      .post('https://amazia-app.herokuapp.com/restaurants', {
          restaurant: this.state
      }, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
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
        [event.target.name]: event.target.value,
      });
    }

    render() {
      return (
        <div>
        <Header />

        <div className="container">
          <div className="new-container text-center">
            <h2>Add New Restaurant</h2>
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <div>
                  <h4>Restaurant Name</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="restaurant_name" type="text" placeholder="Restaurant's Name" />
              </div>
              <div>
                  <h4>Image</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="img_url" type="text" placeholder="Image URL"/>
              </div>
              <div>
                  <h4>Type of Food</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="type" type="text" placeholder="Restaurant's Name"  />
              </div>
              <div>
                  <h4>Address</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="address" type="text" placeholder="Restaurant's Address" />
              </div>
              <div>
                  <h4>Description</h4>
              </div>
              <div>
                  <textarea onChange={this.handleChange.bind(this)} name="description" type="text" placeholder="Description" />
              </div>
              <div>
                  <h4>Rating</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="rating" type="number" placeholder="Rating" />
              </div>
              <div>
                  <h4>Area</h4>
              </div>
              <div>
                  <input onChange={this.handleChange.bind(this)} name="area" type="text" placeholder="Area" />
              </div>
              <div className="text-center">
                  <button type="submit" className="edit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>

      <Footer />
      </div>
    );
  }
}

export default NewRestaurant;
