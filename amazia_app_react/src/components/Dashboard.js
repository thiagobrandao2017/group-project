import React, { Component } from 'react';
import axios from 'axios';
import Restaurants from './Restaurants';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
    }
  }

  componentDidMount() {
    // Equivalent to $.ajax in jQeury, axios is just a different library
    axios
    .get('https://amazia-app.herokuapp.com/restaurants', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    })
    .then((response) => {
      const restaurantsData = response.data;

      // Set state with owners from API
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
      <div>
        <Nav />
        <Header />
        <SearchBar />
        <div>
          {this.state.restaurants.map((restaurant) => {
            return (
              <Restaurants key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
