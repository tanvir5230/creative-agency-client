import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const HeaderIntro = () => {
  return (
    <Row className=" justify-content-center align-items-center">
      <Col xs={10} md={6} lg={5} className="py-5 py-md-3 header-intro">
        <h1 style={{ fontSize: "1.8rem" }} className="font-weight-bold">
          Let’s Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p className="py-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ab sit
          neque iusto praesentium id maxime ipsam nam libero nobis.
        </p>
        <Link to="/client">
          <button
            className="btn text-white"
            style={{
              width: "134px",
              height: "47px",
              borderRadius: "5px",
              backgroundColor: "#111430",
            }}
          >
            Hire Us
          </button>
        </Link>
      </Col>
      <Col md={6} lg={7} className="d-none d-md-block">
        <img
          src={require("../../../../../resources/images/logos/Frame.png")}
          alt=""
          className="img-fluid p-lg-5 p-md-3"
        />
      </Col>
    </Row>
  );
};

export default HeaderIntro;
