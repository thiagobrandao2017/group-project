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
          mouseEnter: false
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

    changeColor() {
      this.setState({
        mouseEnter: true
      })
    }

    render() {
        const colorClass = this.state.mouseEnter ? "red" : "blue";
        return(
            <div>
              <Nav />
              <div className="header-container">
                <Col md={3}>
                  <h4 className="welcome-text">Hi, {this.state.user}</h4>
                </Col>
                <Col md={6}>
                  <div className="logo-box">
                    <Link to={`/`}>
                      <img className="main-logo" src={require('../assets/img/blackLogo.png')}/>
                    </Link>
                  </div>
                </Col>
                <Col md={3} className="text-right">

                </Col>
                <div className="text-right">
                  <button className={`logout-btn ${colorClass}`} onMouseEnter={() => this.changeColor()} onClick={this.handleLogout.bind(this)}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
        );
    }
}

export default Header;
