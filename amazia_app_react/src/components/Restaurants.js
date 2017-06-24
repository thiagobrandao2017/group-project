import React, { Component } from 'react';
import axios from 'axios';
import { ButtonToolbar, MenuItem, Col } from 'react-bootstrap';
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
                <Col md={6}>
                  <div className="image-box">
                  </div>
                  <div className="text-box">
                    <div className="row">
                      <Col sm={4}>
                        <h3>{this.props.restaurant.restaurant_name}</h3>
                      </Col>
                      <Col sm={8} className="text-right">
                        <p className="area-font"><span className="food-type-font">{this.props.restaurant.type}</span> {this.props.restaurant.area}</p>
                      </Col>
                    </div>
                  </div>

                  <div className="caption-wrapper">
                    <div className="caption">
                      <button onClick={(e) => this.handleClick(e)} data-id={this.props.restaurant.id} className="like-btn">Like</button>
                      <Link to={`/restaurants/${this.props.restaurant.id}`} className="view-btn">View</Link>
                    </div>
                  </div>
                </Col>
              </section>
        );
    }
}

export default Restaurants;
