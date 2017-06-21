import React, { Component } from 'react';
import { Link } from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="searchbar-container">
        <button class="dropBtn-area">Select Area</button>
        <div className="dropdown-area">
          <Link className="dropdown-menu" to="">East Village</Link>
          <Link className="dropdown-menu" to="">Financial District</Link>
          <Link className="dropdown-menu" to="">Flatiron</Link>
          <Link className="dropdown-menu" to="">Gramercy Park</Link>
          <Link className="dropdown-menu" to="">Hells Kitchen</Link>
          <Link className="dropdown-menu" to="">Little Italy</Link>
          <Link className="dropdown-menu" to="">Lower East Side</Link>
          <Link className="dropdown-menu" to="">UES</Link>
          <Link className="dropdown-menu" to="">Union Square</Link>
          <Link className="dropdown-menu" to="">UWS</Link>
          <Link className="dropdown-menu" to="">Other</Link>
        </div>

        <button class="dropBtn-type">Select Food</button>
        <div className="dropdown-type">
          <Link className="dropdown-menu" to="">American</Link>
          <Link className="dropdown-menu" to="">Brazilian</Link>
          <Link className="dropdown-menu" to="">Chinese</Link>
          <Link className="dropdown-menu" to="">Dessert</Link>
          <Link className="dropdown-menu" to="">Indian</Link>
          <Link className="dropdown-menu" to="">Japanese</Link>
          <Link className="dropdown-menu" to="">Korean</Link>
          <Link className="dropdown-menu" to="">Middle Eastern</Link>
          <Link className="dropdown-menu" to="">Mediterranean</Link>
          <Link className="dropdown-menu" to="">Mexican</Link>
          <Link className="dropdown-menu" to="">Pizza</Link>
          <Link className="dropdown-menu" to="">Vegan</Link>
          <Link className="dropdown-menu" to="">Other</Link>
        </div>
      </div>
    );
  }
}

export default Search;
