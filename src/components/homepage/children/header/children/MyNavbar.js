import React, { useState } from "react";
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
import "../style/header.css";

const MyNavbar = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const user = null;

  const toggle = () => setIsOpen(!isOpen);

  let prevScroll = window.pageYOffset;
  const changeNavbar = () => {
    let currentScroll = window.pageYOffset;
    if (prevScroll < currentScroll) {
      setNavbar(true);
    } else {
      setNavbar(false);
      prevScroll = window.pageYOffset;
    }
  };

  const changeCollapse = () => {
    if (window.document.documentElement.clientWidth <= 576) {
      setCollapse(true);
    }
  };

  window.addEventListener("resize", changeCollapse);
  window.addEventListener("scroll", changeNavbar);

  return (
    <div
      className={
        navbar
          ? "navbar-after-scroll container-fluid bg-warning"
          : "container py-3"
      }
      style={{ height: "10vh" }}
    >
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
          {user && <span className="text-success">{user.name}</span>}
        </div>
        <NavbarToggler onClick={toggle} />

        <Collapse
          style={
            collapse
              ? { backgroundColor: "#fbd062", zIndex: "10" }
              : { backgroundColor: "none" }
          }
          isOpen={isOpen}
          navbar
        >
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
            {user && user.role === "client" && (
              <NavItem className="mx-2">
                <Link className="nav-link" to="/client">
                  Order
                </Link>
              </NavItem>
            )}
            {user && user.role === "admin" && (
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
            {user && <span className="text-success">{user.name}</span>}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
