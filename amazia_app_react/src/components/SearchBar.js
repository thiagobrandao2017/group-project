import React, { Component } from 'react';
import SearchDropdown from './SearchDropdown';
import { ButtonToolbar, Dropdown, DropdownButton, MenuItem, Col } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchDropdown />
      </div>
    );
  }
}

export default SearchBar;
