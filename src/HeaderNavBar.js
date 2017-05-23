import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

class HeaderNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>fd</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/" exact><NavItem eventKey={1} href="#">CLASSIC</NavItem></LinkContainer>
            <LinkContainer to="/test"><NavItem eventKey={2} href="#">Test</NavItem></LinkContainer>
            
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNavBar;
