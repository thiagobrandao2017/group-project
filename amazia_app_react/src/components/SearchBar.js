import React, { Component } from 'react';
import SearchDropdown from './SearchDropdown';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <SearchDropdown />
      </div>
    );
  }
}

export default SearchBar;
