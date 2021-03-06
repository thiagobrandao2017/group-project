import React, { Component } from 'react';
import { Link } from 'react-router';
import hamburger from '../assets/css/hamburger.css';
import script from '../assets/script/script.js';

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div id="menu-wrapper">
                  <ul id="menu">
                    <Link to={'/favorites'}><li>My Forked List</li></Link>
                    <Link to={'/restaurants/new'}><li>Add a Restaurant</li></Link>
                    <Link to={'/'}><li>View All Restaurants</li></Link>
                    {/* <Link to={'/guest'} onClick={this.handleLogout.bind(this)}><li>Logout</li></Link> */}
                  </ul>
                </div>

                <div id="content-wrapper">
                    <div id="hamburger-button">
                      <a onClick={(e) => this.props.handleClick(e)} id='hamburger-button'>
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
