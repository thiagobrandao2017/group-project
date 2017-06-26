import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import { Col } from 'react-bootstrap';

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
        .post('http://amazia-app.herokuapp.com/users', {
            user: this.state
        })
        .then(() => {
            browserHistory.push('/login');
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
          <section>
            <div className="container">
              <div className="board-container">
                <Col sm={6} className="signup-section">
                <h1 className="text-center">SIGN UP</h1>
                <div className="form-container">
                  <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                      <div>
                          <input
                          onChange={this.handleChange.bind(this)}
                          name="first_name"
                          type="text"
                          value={this.state.first_name} placeholder="First Name"/>
                      </div>
                      <input
                      onChange={this.handleChange.bind(this)}
                      name="last_name"
                      type="text"
                      value={this.state.last_name} placeholder="Last Name"/>
                      <input
                      onChange={this.handleChange.bind(this)}
                      name="email"
                      type="text"
                      value={this.state.email} placeholder="Email" />
                      <input
                      onChange={this.handleChange.bind(this)}
                      name="password"
                      type="text"
                      value={this.state.password} placeholder="Password" />
                      <div className="text-center">
                      <button type="submit">Submit</button>
                      </div>
                  </form>
                </div>
                </Col>
                <Link className="link" to={`/login`}>
                  <Col sm={6} className="login-section">
                    <img className="guest-logo" src={require('../assets/img/blackLogo.png')}/>
                    <h1 className="text-center main-login-text">LOG IN</h1>
                  </Col>
                </Link>
              </div>
            </div>
          </section>
        );
    }
}

export default Signup;
