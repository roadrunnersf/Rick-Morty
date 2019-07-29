import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => (
  <div>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/characters/">{String.raw`<RickAndMorty />`}</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/characters">Characters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/guess">Guesser</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;
