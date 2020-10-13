import React from "react";
import { Col, Row } from "reactstrap";

const HeaderIntro = () => {
  return (
    <Row className=" justify-content-center align-items-center">
      <Col xs={10} md={5} className="py-3">
        <h1 style={{ fontSize: "2.5rem" }} className="font-weight-bold">
          Let’s Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ab sit
          neque iusto praesentium id maxime ipsam nam libero nobis.
        </p>
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
      </Col>
      <Col md={7} className="d-none d-md-block">
        <img
          src={require("../../../../../resources/images/logos/Frame.png")}
          alt=""
          className="img-fluid p-lg-5"
        />
      </Col>
    </Row>
  );
};

export default HeaderIntro;
