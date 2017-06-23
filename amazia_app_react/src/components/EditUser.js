import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Edit Thiago's Profile</h1>
        <form>
          <div>
            First Name
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            Last Name
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            Email
          </div>
          <div>
            <input type="email"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditUser;
