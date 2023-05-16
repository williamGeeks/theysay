import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function Header() {
  return (
    <div>
      <Navbar >
        <NavbarBrand href="#">theysay</NavbarBrand>
        <Nav className='ml-auto' style={{ display: 'flex' }} navbar>
          <NavItem>
            <NavLink>Yes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Yes</NavLink>
          </NavItem>
        </Nav>

          <NavbarText>Simple Text</NavbarText>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

export default Header;
