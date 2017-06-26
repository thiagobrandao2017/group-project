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
                    <Link to={'/favorites'}><li className="selected">My Favorites</li></Link>
                    <Link to='restaurants'><li>Second Item</li></Link>
                    <li>Third Item</li>
                    <li>Fourth Item</li>
                    <li>Fifth Item</li>
                    <button onClick={this.handleLogout.bind(this)}>
                        Logout
                    </button>
                  </ul>
                </div>

                <div id="content-wrapper">
                    <a onClick={(e) => this.handleClick(e)} id='hamburger-button'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Nav;
