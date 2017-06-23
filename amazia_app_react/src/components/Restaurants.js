import React, { Component } from 'react';
import { ButtonToolbar, MenuItem, Col } from 'react-bootstrap';

class Restaurants extends Component {
    constructor(props) {
        super(props);
    }

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
                  <button className="like-btn">Like</button>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </Col>
          </section>
        );
    }
}

export default Restaurants;
