import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { browserHistory } from 'react-router';

import Nav from './Nav';

class EditRestaurant extends Component {
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
        .get(`http://amazia-app.herokuapp.com/restaurants/${this.props.params.id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
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
            [event.target.name]: event.target.value
        });
    }



    render() {
        return(
            <div>
              <Header />

              <div className="container">
                <div className="edit-container text-center">
                  <h2>Edit {this.state.restaurant_name}</h2>
                  <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                      <h4>Restaurant's Name</h4>
                    </div>
                      <div>
                        <input onChange={this.handleChange.bind(this)} name="restaurant_name" type="text" value={this.state.restaurant_name} />
                      </div>
                      <div>
                        <h4>Image</h4>
                      </div>
                      <div>
                          <input onChange={this.handleChange.bind(this)} name="img_url" type="text" value={this.state.img_url} />
                      </div>
                      <div>
                          <h4>Location</h4>
                      </div>
                      <div>
                          <input onChange={this.handleChange.bind(this)} name="area" type="text" value={this.state.area} />
                      </div>
                      <div>
                          <h4>Description</h4>
                      </div>
                      <div>
                          <textarea onChange={this.handleChange.bind(this)} name="description" type="text" value={this.state.description} />
                      </div>
                      <div>
                          <h4>Address</h4>
                      </div>
                      <div>
                          <input onChange={this.handleChange.bind(this)} name="address" type="text" value={this.state.address} />
                      </div>
                      <button className="edit-btn" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            <Footer />
          </div>
        );
    }
}

export default EditRestaurant;
