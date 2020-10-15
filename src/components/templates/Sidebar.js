import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Col, Nav } from "reactstrap";
import { userContext } from "../../App";

const Sidebar = ({ navItemsArr, url }) => {
  const { handleLogout } = useContext(userContext);
  return (
    <Col xs={2} md={3} lg={2} className="px-0 pt-5 h-100">
      <Nav vertical light className="w-100 h-100 align-items-center">
        {navItemsArr.map((item) => {
          return (
            <NavLink
              to={`${url}/${item.name}`}
              className="w-50 d-flex justify-content-start align-items-center text-dark mt-4"
            >
              <span className={`fa fa-${item.icon} mr-md-2`}></span>
              <span className="d-none d-md-inline">{item.name}</span>
            </NavLink>
          );
        })}
        <button
          className="btn btn-outline-success w-50 d-flex justify-content-center align-items-center
              mt-4 p-0 py-2"
          style={{ position: "absolute", bottom: "100px" }}
          onClick={handleLogout}
        >
          <span className="fa fa-sign-out mr-md-2"></span>
          <span className="d-none d-md-inline">Logout</span>
        </button>
      </Nav>
    </Col>
  );
};

export default Sidebar;
