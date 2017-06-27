import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link, browserHistory } from 'react-router';
import Nav from './Nav';

class FavoritesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
              <div className="favorite-card">
                <Col md={2} className="text-right">
                  <button className="delete-btn" onClick={this.props.destroyFavorite}><FontAwesome name="minus" className="text-right view-link"/></button>
                </Col>
                <Col md={10}>
                  <Link to={`/favorites/${this.props.favorite.id}`}>
                  <div className="favorite-card-box">
                    <Col md={5} className="no-padding">
                      <div className="favorite-img-box">
                        <img src={this.props.favorite.img_url} />
                      </div>
                    </Col>
                    <Col md={7} className="favorite-text-col">
                      <div className="favorite-text-box">
                        <h2>{this.props.favorite.restaurant_name} <span className="food-type-font">{this.props.favorite.type}</span></h2>
                        <h4>{this.props.favorite.area}</h4>
                      </div>
                      <FontAwesome name="chevron-right" className="text-right view-favorite" />
                    </Col>
                  </div>
                  </Link>
                </Col>
              </div>

            </div>
        );
    }
}

export default FavoritesList;
