import React, { Component } from 'react';
import hamburger from './hamburger.css';
import script from './script.js';

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div id="menu-wrapper">
                    <ul id="menu">
                    <li className="selected"><a href="#">First Item</a></li>
                    <li><a href="#">Second Item</a></li>
                    <li><a href="#">Third Item</a></li>
                    <li><a href="#">Fourth Item</a></li>
                    <li><a href="#">Fifth Item</a></li>
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
