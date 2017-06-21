import React, { Component } from 'react';
import Restaurants from './Restaurants';
import Nav from './Nav';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
        <Restaurants />
      </div>
    );
  }
}

export default Dashboard;
