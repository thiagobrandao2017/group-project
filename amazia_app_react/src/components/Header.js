import React, { Component } from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import greenRedLogo from '../assets/img/greenRedLogo.png';
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
          user: response.data,
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
              <div className="header-container">
                <Col sm={3}>
                  <p className="welcome-text">Hi, {this.state.user.first_name}</p>
                </Col>
                <Col sm={6}>
                  <div className="text-center">
                    <img className="main-logo" src="greenRedLogo.png"/>
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
              <SearchBar />
            </div>
        );
    }
}

export default Header;
