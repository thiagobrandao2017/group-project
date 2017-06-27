import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import { Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

class Favorite extends Component {
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
      console.log(this.props.params.id);
      window.scrollTo(0,0);
      axios
      .get(`http://amazia-app.herokuapp.com/favorites/${this.props.params.id}`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      })
      .then((response) => {
        console.log(response);

        this.setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    render() {
        return(
            <div>
              <Header />
              <div>
                <div className="single-img-box">
                  <img src={this.state.img_url} />
                </div>
                <div className="container single-container single-text-box">
                  <div className="row">
                    <Col sm={11}>
                      <h1 className="font-bold">{this.state.restaurant_name} <span className="span-font">{this.state.type}</span></h1>
                      <h4 className="area-font font-bold">{this.state.area}</h4>
                    </Col>
                    <Col sm={1}>
                      <button onClick={(e) => this.handleClick(e)} className="like-btn"><img className="fork-big" src={require('../assets/img/blackFork.png')}/>

                      </button>
                    </Col>
                  </div>
                  <div className="ratings-box">

                  </div>
                  <p className="desc-font text-left">{this.state.description}</p>
                  <p className="a-font">{this.state.address}</p>
                  <Link to={`/favorites`}><button className="back-btn">Back</button></Link>
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Favorite;
