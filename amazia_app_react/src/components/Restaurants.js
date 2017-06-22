import React, { Component } from 'react';
import { Link } from 'react-router';



class Restaurants extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <section className="container-wrapper">
            <div className="container">
              <div className="row">

                <div className="col-md-6 card-container">
                  <div className="image-box">
                    <img src={this.props.restaurant.img_url} />
                  </div>
                  <div className="text-box">
                    <div className="row">
                      <div className="col-sm-4">
                        <h3>{this.props.restaurant.restaurant_name}</h3>
                      </div>
                      <div className="col-sm-8 text-right">
                        <p className="area-font"><span className="food-type-font">{this.props.restaurant.type}</span> {this.props.restaurant.area}</p>
                      </div>
                    </div>
                  </div>


                      <button className="like-btn">Like</button>
                      <Link to={`/restaurants/${this.props.restaurant.id}`} className="view-btn">View</Link>

                </div>

              </div>
            </div>
          </section>

        );
    }
}

export default Restaurants;
