import React, { Component } from 'react';
import axios from 'axios';
import blackFork from '../assets/img/blackFork.png';
import { ButtonToolbar, MenuItem, Col, Grid, Row, Dropdown } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';

class Restaurants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurant_id: 0
        }
    }

    handleClick(e) {
        console.log(e.target.dataset.id);
        axios
        .post('https://amazia-app.herokuapp.com/favorites/', {
            restaurant_id: e.target.dataset.id
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
    //
    // handleData(event) {
    //     console.log(event.target.dataset.id);
    //     this.setState({
    //       restaurant_id: event.target.dataset.id
    //     })
    // }



    render() {
        return(
          <section className="container-wrapper">
            <Link to={`/restaurants/${this.props.restaurant.id}`} className="card-link">
              <Col md={6}>
                <div className="card-container">
                  <div className="image-box">
                    <img className="img-thumbnail" src={this.props.restaurant.img_url} />
                  </div>
                  <div className="text-box">
                    <div className="row">
                      <Col sm={12}>
                        <h3>{this.props.restaurant.restaurant_name} <span className="food-type-font">{this.props.restaurant.type}</span></h3>
                      </Col>
                      <Col sm={8}>
                        <p className="area-font">{this.props.restaurant.area}</p>
                      </Col>
                      <Col sm={4} className="text-right">
                        <button onClick={(e) => this.handleClick(e)} data-id={this.props.restaurant.id} className="like-btn"><img className="fork" src="blackFork.png"/></button>
                        <FontAwesome name="chevron-right" className="text-right view-link"/>
                      </Col>
                    </div>
                  </div>
                </div>
              </Col>
            </Link>
          </section>
        );
    }
}

export default Restaurants;
