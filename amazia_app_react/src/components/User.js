import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="Personal_Infos">
                    <h1>Julia</h1>
                    <h3>email.com</h3>
                    <button>Edit</button>
                    <button>Bookmarks</button>
                </div>
            </div>
        );
    }
}

export default User;
