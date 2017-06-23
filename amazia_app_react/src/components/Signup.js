import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .post('http://amazia-app.herokuapp.com/users/', {
            user: this.state
        })
        .then(() => {
            browserHistory.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        First Name
                    </div>
                    <div>
                        <input
                        onChange={this.handleChange.bind(this)}
                        name='first_name'
                        type='text'
                        value={this.state.first_name} />
                    </div>
                    <div>
                        Last Name
                    </div>
                    <input
                    onChange={this.handleChange.bind(this)}
                    name='last_name'
                    type='text'
                    value={this.state.last_name} />
                    <div>
                        Email
                    </div>
                    <input
                    onChange={this.handleChange.bind(this)}
                    name='email'
                    type='text'
                    value={this.state.email} />
                    <div>
                        Password
                    </div>
                    <input
                    onChange={this.handleChange.bind(this)}
                    name='password'
                    type='text'
                    value={this.state.password} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;
