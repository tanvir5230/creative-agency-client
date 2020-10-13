import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container py-3">
      <Navbar color="light" light expand="md" className="bg-transparent">
        <NavbarBrand href="/">
          <img
            src={require("../../../../../resources/images/logos/logo.png")}
            alt="logo"
            width="150"
            height="47"
          />
        </NavbarBrand>
        <div className="d-md-none ml-auto mr-2">
          <button className="btn btn-dark">login</button>
          {/* <span>tanvir</span> */}
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ml-auto font-weight-bold"
            navbar
            style={{ fontSize: "14px", color: "#474747" }}
          >
            <NavItem className="mx-2">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">Our Portfolio</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">Our Team</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <div className="d-none d-md-block">
            <button
              className="btn text-white"
              style={{
                width: "134px",
                height: "47px",
                borderRadius: "5px",
                backgroundColor: "#111430",
              }}
            >
              login
            </button>
            {/* <span>tanvir</span> */}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
