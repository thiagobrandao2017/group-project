import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Restaurants from './Restaurants';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      filteredRestaurants: []
    }
    this.onSelectArea = this.onSelectArea.bind(this);
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
      console.log(response.data)
      this.setState({
        restaurants: restaurantsData,
        filteredRestaurants: restaurantsData
      });
      console.log(this.state)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onSelectArea(each) {
    (each === "All") ? this.setState({ filteredRestaurants: this.state.restaurants }):
    this.setState({ filteredRestaurants: this.state.restaurants.filter(x => x.area === each) });

    // if (each === "All") {
    //   this.setState({
    //     filteredRestaurants: this.state.restaurants
    //   })
    // } else {
    //   this.setState({
    //     filteredRestaurants: this.state.restaurants.filter(x => x.area === each)
    //   });
    // }
  }

  render() {
    return (
      <section>
        <Header />
        <SearchBar onSelectArea={this.onSelectArea} />
        <div className="container dashboard-container">
          {this.state.filteredRestaurants.map((restaurant) => {
            return (
              <Restaurants key={restaurant.id} restaurant={restaurant}/>
            );
          })}
        </div>
        <Footer />
      </section>
    );
  }
}

export default Dashboard;
