import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const Topbar = ({ title, username }) => {
  return (
    <>
      <Col
        xs={2}
        md={3}
        lg={2}
        className="overflow-hidden d-flex justify-content-center"
      >
        <Link to="/">
          <img
            src={require("../../resources/images/logos/logo.png")}
            alt=""
            width="100"
            height="30"
            className="img-fluid"
          />
        </Link>
      </Col>
      <Col
        xs={10}
        md={9}
        lg={10}
        className="d-flex justify-content-between align-items-center font-weight-bold pr-5"
      >
        <span style={{ fontSize: "1.5rem" }}>{title}</span>
        <span>{username}</span>
      </Col>
    </>
  );
};

export default Topbar;
