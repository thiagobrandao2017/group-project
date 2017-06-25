import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem('token');

        browserHistory.push('login');
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
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
