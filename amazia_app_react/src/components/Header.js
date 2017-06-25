import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout(event) {
        event.preventDefault();

        window.localStorage.removeItem('token');

        browserHistory.push('login');
    }

    render() {
        return(
            <div>
                <section className="header-section">
                    <nav className="nav-wrapper">
                        <div className="logo">
                         A
                        </div>
                    </nav>
                    <button onClick={this.handleLogout.bind(this)}>
                        Logout
                    </button>
                </section>
            </div>
        );
    }
}

export default Header;
