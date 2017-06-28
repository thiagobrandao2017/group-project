import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

class GuestDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="board-section">
        <div className="container">
          <div className="board-container">
            <Link className="link" to={`/signup`}>
              <Col sm={6} className="signup-section">
              <h1 className="text-center main-text">SIGN UP</h1>
              </Col>
            </Link>

            <Link className="link" to={`/login`}>
              <Col sm={6} className="login-section login-section-gray">
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

export default GuestDashboard;
