import React, { Component } from 'react';




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
                  <div className="image-box" background={this.props.restaurant.img_url}>
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

                  <div className="caption-wrapper">
                    <div className="caption">
                      <button className="like-btn">Like</button>
                      <button className="view-btn">View</button>
                    </div>
                  </div>
                </div>

            </div>
            </div>
          </section>

        );
    }
}

export default Restaurants;
