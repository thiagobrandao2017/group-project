import React, { Component } from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, MenuItem, Col } from 'react-bootstrap';

// <Col className="food-search" md={6} className="searchBtn">
// <ButtonToolbar className="food-search-bar">
// <DropdownButton className="food-dropdown" bsStyle="default" title="Select Food" key="2">
// <MenuItem eventKey="1">American</MenuItem>
// <MenuItem eventKey="2">Brazilian</MenuItem>
// <MenuItem eventKey="3">Chinese</MenuItem>
// <MenuItem eventKey="4">Korean</MenuItem>
// <MenuItem eventKey="5">Japanese</MenuItem>
// <MenuItem eventKey="6">Italian</MenuItem>
// <MenuItem eventKey="7">French</MenuItem>
// <MenuItem eventKey="8">Mediterranean</MenuItem>
// <MenuItem eventKey="9">Indian</MenuItem>
// <MenuItem eventKey="10">Thai</MenuItem>
// <MenuItem eventKey="11">Vietnamese</MenuItem>
// <MenuItem eventKey="12">Pizza</MenuItem>
// <MenuItem eventKey="13">Vegan</MenuItem>
// <MenuItem eventKey="14">Mexican</MenuItem>
// <MenuItem eventKey="15">Dessert</MenuItem>
// <MenuItem eventKey="16">Other</MenuItem>
// </DropdownButton>
// </ButtonToolbar>
// </Col>

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchbar-container">
        <div className="container">
          <Col className="area-search" md={6} className="searchBtn">
            <ButtonToolbar className="area-search-bar">
              <DropdownButton className="area-dropdown" bsStyle="default" title="Select Area" key="1">
                <MenuItem eventKey="1">East Village</MenuItem>
                <MenuItem eventKey="2">West Village</MenuItem>
                <MenuItem eventKey="3">Flatiron</MenuItem>
                <MenuItem eventKey="4">Gramercy</MenuItem>
                <MenuItem eventKey="5">UES</MenuItem>
                <MenuItem eventKey="6">UWS</MenuItem>
                <MenuItem eventKey="7">Hells Kitchen</MenuItem>
                <MenuItem eventKey="8">Lower East Side</MenuItem>
                <MenuItem eventKey="9">Union Square</MenuItem>
                <MenuItem eventKey="10">Little Italy</MenuItem>
                <MenuItem eventKey="11">Financial District</MenuItem>
                <MenuItem eventKey="12">Other</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </Col>

        </div>
      </div>
    );
  }
}

export default SearchDropdown;
