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
                        A Logo Here
                    </div>
                </nav>
            </section>
        );
    }
}

export default Header;
