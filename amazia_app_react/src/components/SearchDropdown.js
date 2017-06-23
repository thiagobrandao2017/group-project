import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem, Col } from 'react-bootstrap';

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col className="area-search" md={6} mdPush={6} className="searchBtn">
          <ButtonToolbar className="area-search-bar">
            <DropdownButton className="area-dropdown" bsStyle="default" title="Select Area" key="1">
              <MenuItem eventKey="1" location="#">East Village</MenuItem>
              <MenuItem eventKey="2" location="#">West Village</MenuItem>
              <MenuItem eventKey="3" location="#">Flatiron</MenuItem>
              <MenuItem eventKey="4" location="#">Gramercy</MenuItem>
              <MenuItem eventKey="5" location="#">UES</MenuItem>
              <MenuItem eventKey="6" location="#">UWS</MenuItem>
              <MenuItem eventKey="7" location="#">Hells Kitchen</MenuItem>
              <MenuItem eventKey="8" location="#">Lower East Side</MenuItem>
              <MenuItem eventKey="9" location="#">Union Square</MenuItem>
              <MenuItem eventKey="10" location="#">Little Italy</MenuItem>
              <MenuItem eventKey="11" location="#">Financial District</MenuItem>
              <MenuItem eventKey="12" location="#">Other</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Col>

        <Col className="food-search" md={6} mdPull={6} className="searchBtn">
          <ButtonToolbar className="food-search-bar">
            <DropdownButton className="food-dropdown" bsStyle="default" title="Select Food" key="2">
              <MenuItem eventKey="1" location="#">American</MenuItem>
              <MenuItem eventKey="2" location="#">Brazilian</MenuItem>
              <MenuItem eventKey="3" location="#">Chinese</MenuItem>
              <MenuItem eventKey="4" location="#">Korean</MenuItem>
              <MenuItem eventKey="5" location="#">Japanese</MenuItem>
              <MenuItem eventKey="4" location="#">Italian</MenuItem>
              <MenuItem eventKey="6" location="#">French</MenuItem>
              <MenuItem eventKey="7" location="#">Mexican</MenuItem>
              <MenuItem eventKey="8" location="#">Mediterranean</MenuItem>
              <MenuItem eventKey="9" location="#">Indian</MenuItem>
              <MenuItem eventKey="10" location="#">Thai</MenuItem>
              <MenuItem eventKey="11" location="#">Vietnamese</MenuItem>
              <MenuItem eventKey="12" location="#">Pizza</MenuItem>
              <MenuItem eventKey="13" location="#">Vegan</MenuItem>
              <MenuItem eventKey="14" location="#">Dessert</MenuItem>
              <MenuItem eventKey="15" location="#">Other</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Col>
      </div>
    );
  }
}

export default SearchDropdown;
