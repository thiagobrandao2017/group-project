import React, { Component } from 'react';
import { Link } from 'react-router';
import hamburger from '../assets/css/hamburger.css';
import script from '../assets/script/script.js';

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem('token');

        browserHistory.push('login');
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

    render() {
        return(
            <div>
                <div id="menu-wrapper">
                  <ul id="menu">
                    <li className="selected">My Favorites</li>
                    <li>Second Item</li>
                    <li>Third Item</li>
                    <li>Fourth Item</li>
                    <li>zFifth Item</li>
                    <button onClick={this.handleLogout.bind(this)}>
                        Logout
                    </button>
                  </ul>
                </div>

                <div id="content-wrapper">
                    <div id="hamburger-button">
                      <a onClick={(e) => this.handleClick(e)} id='hamburger-button'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
