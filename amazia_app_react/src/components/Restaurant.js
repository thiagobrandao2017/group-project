import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

class Restaurant extends Component {
    constructor(props) {
      super(props);

      this.state = {
        id: 0,
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
      axios
      .get(`https://amazia-app.herokuapp.com/restaurants/${this.props.params.id}`, {
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

    handleClick(e) {
        console.log(this.props.params.id);
        axios
        .post('https://amazia-app.herokuapp.com/favorites/', {
            restaurant_id: this.props.params.id
        }, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        })
        .then(() => {

            browserHistory.push(`/restaurants/${this.props.params.id}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // <div className="container single-container">
    //   <div className="single-img-box">
    //     <img src={this.state.img_url} />
    //   </div>
    //   <div className="single-text-box">
    //     <div className="row">
    //       <Col sm={11}>
    //         <h1 className="font-bold">{this.state.restaurant_name} <span className="span-font">{this.state.type}</span></h1>
    //         <h4 className="area-font font-bold">{this.state.area}</h4>
    //       </Col>
    //       <Col sm={1}>
    //         <button onClick={(e) => this.handleClick(e)} className="like-btn"><img className="fork-big" src={require('../assets/img/blackFork.png')}/>
    //
    //         </button>
    //       </Col>
    //     </div>
    //     <div className="ratings-box">
    //
    //     </div>
    //     <p className="desc-font text-left">{this.state.description}</p>
    //     <p className="a-font">{this.state.address}</p>
    //     <Link to={`/restaurants/${this.props.params.id}/edit`}><button className="edit-btn">Edit</button></Link>
    //     <Link to={`/`}><button className="back-btn">Back</button></Link>
    //   </div>
    // </div>

    render() {
        return(
            <div>
              <Header />

              <div className="view-container">
                <Col md={5} className="no-padding">
                  <div className="view-img-box">
                    <img src={this.state.img_url} />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="view-text-box">
                    <Col md={11}>
                      <h1 className="font-bold">{this.state.restaurant_name} <span className="span-font">{this.state.type}</span></h1>
                      <h4 className="area-font font-bold">{this.state.area}</h4>
                    </Col>
                    <Col md={1}>
                      <button onClick={(e) => this.handleClick(e)} className="like-btn"><img className="fork-big" src={require('../assets/img/blackFork.png')}/>
                      </button>
                    </Col>
                    <p className="desc-font-view text-left">{this.state.description}</p>
                    <p className="a-font-view">{this.state.address}</p>
                    <Link to={`/restaurants/${this.props.params.id}/edit`}><button className="edit-btn edit-btn-margin">Edit</button></Link>
                    <Link to={`/`}><button className="back-btn">Back</button></Link>
                  </div>
                </Col>
              </div>

              <Footer />
            </div>
        );
    }
}

export default Restaurant;
