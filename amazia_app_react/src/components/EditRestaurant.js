import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class EditRestaurant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Edit Restaurant</h2>
                <form>
                    <div>
                        Image URL
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        Restaurant Name
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        Location in NYC
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        Star Rating
                    </div>
                    <div>
                        <input type="number" />
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        Address
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditRestaurant;
