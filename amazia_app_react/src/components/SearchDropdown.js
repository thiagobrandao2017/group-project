import React, { Component } from 'react';
import { ButtonToolbar, Dropdown, DropdownButton, MenuItem, Col } from 'react-bootstrap';

class SearchDropdown extends Component {
  render() {
    const locations = this.props.location.map(each => {
      return <MenuItem onClick={() => this.props.onSelectArea(each)}>{each}</MenuItem>
    });

    return (
      <div className="searchbar-container">
        <div className="container">
          <Col className="area-search" md={12} className="searchBtn">
            <ButtonToolbar className="area-search-bar">
              <DropdownButton className="area-dropdown" bsStyle="default" title="Select Area" key="1">
                {locations}
              </DropdownButton>
            </ButtonToolbar>
          </Col>

        </div>
      </div>
    );
  }
}

export default SearchDropdown;
SearchDropdown.defaultProps = {
  location: ["West Village", "Flatiron", "Gramercy", "UES", "UWS", "Hells Kitchen", "Lower East Side",
  "Union Square", "Little Italy", "Financial District", "Other", "All"]
}
