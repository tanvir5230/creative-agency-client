import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./services.css";

const Services = () => {
  return (
    <Container>
      <h3 className="text-center font-weight-bold pb-5">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h3>
      <Row className="justify-content-center align-items-center">
        <Col xs={10} md={4} className="service-hover p-3">
          <Link className="nav-link text-dark" to="/client">
            <div className="d-flex flex-column align-items-center text-center px-2">
              <img
                src={require("../../../../resources/images/icons/service1.png")}
                alt=""
                width="74"
                height="74"
                className="rounded-circle"
              />
              <h4 className="mt-2">Web & Mobile Design</h4>
              <p className="py-2" style={{ fontSize: ".9rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore quam aperiam, illo quae non excepturi.
              </p>
            </div>
          </Link>
        </Col>

        <Col xs={10} md={4} className="service-hover p-3">
          <div className="d-flex flex-column align-items-center text-center px-2">
            <img
              src={require("../../../../resources/images/icons/service1.png")}
              alt=""
              width="74"
              height="74"
              className="rounded-circle"
            />
            <h4 className="mt-2">Web & Mobile Design</h4>
            <p className="py-2" style={{ fontSize: ".9rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              quam aperiam, illo quae non excepturi.
            </p>
          </div>
        </Col>

        <Col xs={10} md={4} className="service-hover p-3">
          <div className="d-flex flex-column align-items-center text-center px-2">
            <img
              src={require("../../../../resources/images/icons/service1.png")}
              alt=""
              width="74"
              height="74"
              className="rounded-circle"
            />
            <h4 className="mt-2">Web & Mobile Design</h4>
            <p className="py-2" style={{ fontSize: ".9rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              quam aperiam, illo quae non excepturi.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
