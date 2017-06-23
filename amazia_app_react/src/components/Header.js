import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section class="header-section">
                <nav class="nav-wrapper">
                    <div class="logo">
                        <img src="http://i.imgur.com/VvLQew7.png?2" alt="A Logo Here" width="50" />
                    </div>
                </nav>
            </section>
        );
    }
}

export default Header;
