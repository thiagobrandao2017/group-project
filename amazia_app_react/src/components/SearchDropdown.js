import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem, Col } from 'react-bootstrap';

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col md={6} mdPush={6} className="searchBtn">
          <ButtonToolbar>
            <DropdownButton bsStyle="default" title="Select Area" key="1">
              <MenuItem eventKey="1" location="#">East Village</MenuItem>
              <MenuItem eventKey="2" location="#">West Village</MenuItem>
              <MenuItem eventKey="3" location="#">UES</MenuItem>
              <MenuItem eventKey="4" location="#">UWS</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Col>

        <Col md={6} mdPull={6} className="searchBtn">
          <ButtonToolbar>
            <DropdownButton bsStyle="default" title="Select Food" key="1">
              <MenuItem eventKey="1" location="#">American</MenuItem>
              <MenuItem eventKey="2" location="#">Brazilian</MenuItem>
              <MenuItem eventKey="3" location="#">Chinese</MenuItem>
              <MenuItem eventKey="4" location="#">Korean</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Col>
      </div>
    );
  }
}

export default SearchDropdown;
