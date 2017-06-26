import React, { Component } from 'react';
import blackLogo from '../assets/img/blackLogo.png';
import Nav from './Nav';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          user: [],
        }
    }

    componentDidMount() {
      axios
      .get('https://amazia-app.herokuapp.com/users', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      })
      .then((response) => {
        this.setState({
          user: window.localStorage.getItem('user'),
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem('token');

        browserHistory.push('guest');
    }

    render() {
        return(
            <div>
              <Nav />
              <div className="header-container">
                <Col sm={3}>
                  <p className="welcome-text">Hi, {this.state.user}</p>
                </Col>
                <Col sm={6}>
                  <div className="text-center">
                    <Link to={`/`}>
                      <img className="main-logo" src={require('../assets/img/blackLogo.png')}/>
                    </Link>
                  </div>
                </Col>
                <Col sm={3} className="text-right">

                </Col>
                <div className="text-right">
                  <button className="logout-btn" onClick={this.handleLogout.bind(this)}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
        );
    }
}

export default Header;
