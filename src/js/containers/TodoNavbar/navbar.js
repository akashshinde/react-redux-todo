/**
 * Created by akash on 30/05/16.
 */


import React from 'react';
import {Navbar,Nav,MenuItem,NavDropdown,NavItem} from 'react-bootstrap';

export default class TodoNavbar extends React.Component{
  render(){
    return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand className="active">
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#"></NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
