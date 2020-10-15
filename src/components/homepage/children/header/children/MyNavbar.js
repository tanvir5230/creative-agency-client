import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { userContext } from "../../../../../App";
import "../style/header.css";

const MyNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogout } = useContext(userContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const toggle = () => setIsOpen(!isOpen);

  const userType = localStorage.getItem("userType");

  return (
    <div className="container py-3" style={{ height: "10vh" }}>
      <Navbar
        expand="md"
        light
        className="text-right"
        style={{
          background: "#fbd062",
          zIndex: "100",
        }}
      >
        <NavbarBrand href="/">
          <img
            src={require("../../../../../resources/images/logos/logo.png")}
            alt="logo"
            width="150"
            height="47"
          />
        </NavbarBrand>
        <div className="d-md-none ml-auto mr-2">
          {user === null && (
            <Link
              className="nav-link"
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            >
              <button
                className="btn login text-white"
                style={{
                  width: "134px",
                  height: "47px",
                  borderRadius: "5px",
                  backgroundColor: "#111430",
                }}
              >
                login
              </button>
            </Link>
          )}
          {user && (
            <>
              <span className="text-success">
                {user.displayName.slice(0, 6)}
              </span>
              <button className="btn btn-sm" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
              </button>
            </>
          )}
        </div>
        <NavbarToggler onClick={toggle} />

        <Collapse style={{ backgroundColor: "none" }} isOpen={isOpen} navbar>
          <Nav
            className="ml-auto font-weight-bold"
            navbar
            style={{ fontSize: "14px", color: "#474747" }}
          >
            <NavItem className="mx-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#portfolio">Our Portfolio</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#contact">Contact Us</NavLink>
            </NavItem>
            {user === null && (
              <>
                <NavItem className="mx-2">
                  <Link className="nav-link" to="/client">
                    Order
                  </Link>
                </NavItem>
                <NavItem className="mx-2">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </NavItem>
              </>
            )}
            {userType === "client" && (
              <NavItem className="mx-2">
                <Link className="nav-link" to="/client">
                  Order
                </Link>
              </NavItem>
            )}
            {userType === "admin" && (
              <NavItem className="mx-2">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </NavItem>
            )}
          </Nav>
          <div className="d-none d-md-block">
            {user === null && (
              <Link
                className="nav-link"
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              >
                <button
                  className="btn login text-white"
                  style={{
                    width: "134px",
                    height: "47px",
                    borderRadius: "5px",
                    backgroundColor: "#111430",
                  }}
                >
                  login
                </button>
              </Link>
            )}
            {user && (
              <>
                <span className="text-success">
                  {user.displayName.slice(0, 6)}
                </span>
                <button className="btn btn-sm" onClick={handleLogout}>
                  <i className="fa fa-sign-out"></i>
                </button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
