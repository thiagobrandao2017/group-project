import React, { Component } from 'react';
import Restaurants from './Restaurants';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Restaurants />
      </div>
    );
  }
}

export default Dashboard;
