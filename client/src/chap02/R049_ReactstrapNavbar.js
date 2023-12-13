import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

function R049_ReactstrapNavbar(props) {

  const [collapsed, setCollapsed] = useState(false)

  let toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Navbar color={`faded`} light>
        <NavbarBrand href={`/`} className={`mr-auto`}>Navbar</NavbarBrand>
        <NavbarToggler onClick={toggle} className={`mr-2`} />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href={`#`} onClick={toggle}>react</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`http://example.com`} onClick={toggle}>200</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default R049_ReactstrapNavbar;