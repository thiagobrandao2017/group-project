import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Restaurants from './Restaurants';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    axios
    .get('https://amazia-app.herokuapp.com/restaurants', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
    .then((response) => {
      const restaurantsData = response.data;

      this.setState({
        restaurants: restaurantsData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <section>
        <Header />
        <SearchBar />
        <div className="container dashboard-container">
          {this.state.restaurants.map((restaurant) => {
            return (
              <Restaurants key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </div>
        <Footer />
      </section>
    );
  }
}

export default Dashboard;
