import React, { Component } from 'react';
import blackLogo from '../assets/img/blackLogo.png';
import { Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import Nav from './Nav';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          user: window.localStorage.getItem('user'),
          mouseEnter: false,
        }
    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem('token');

        browserHistory.push('guest');
    }

    handleClick(e) {
        const menuWrapper = document.querySelector('#menu-wrapper');
        const burgerButton = document.querySelector('#hamburger-button');

        const slideMenuMenu = () => {
            menuWrapper.classList.toggle('open');
        }

        const animateHamburger = () => {
            burgerButton.classList.toggle('open');
        }

        slideMenuMenu();
        animateHamburger();
    }

    changeColor() {
      this.setState({
        mouseEnter: true
      })
    }

    render() {
        return(
            <div>
              <Nav
                handleClick={this.handleClick}
              />
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
                  <button className={`logout-btn`} onMouseEnter={this.changeColor} onClick={this.handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
        );
    }
}

export default Header;
