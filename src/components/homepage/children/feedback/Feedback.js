import React from "react";
import { Col, Container, Row } from "reactstrap";

const Feedback = () => {
  return (
    <Container className="mt-5 pt-5">
      <h3 className="text-center mb-5">
        Clients{" "}
        <span className="font-weight-bold" style={{ color: "#7ab259" }}>
          Feedback
        </span>
      </h3>
      <Row className="flex-wrap justify-content-center align-items-center">
        <Col xs={10} md={4} className="p-2">
          <div className="border p-2">
            <div className="d-flex align-items-end">
              <span style={{ width: "64", height: "64" }}>
                <img
                  className="rounded-circle"
                  src={require("../../../../resources/images/customer-2.png")}
                  alt=""
                  width="64"
                  height="64"
                />
              </span>
              <div>
                <span style={{ fontSize: "1.3rem" }}>Tanvir</span>
                <small className="text-secondary d-block">
                  CEO,Skillstacks
                </small>
              </div>
            </div>
            <p className="text-secondary pt-3 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              libero illum soluta doloribus totam iusto.
            </p>
          </div>
        </Col>

        <Col xs={10} md={4} className="p-2">
          <div className="border p-2">
            <div className="d-flex align-items-end">
              <span style={{ width: "64", height: "64" }}>
                <img
                  className="rounded-circle"
                  src={require("../../../../resources/images/customer-2.png")}
                  alt=""
                  width="64"
                  height="64"
                />
              </span>
              <div>
                <span style={{ fontSize: "1.3rem" }}>Tanvir</span>
                <small className="text-secondary d-block">
                  CEO,Skillstacks
                </small>
              </div>
            </div>
            <p className="text-secondary pt-3 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              libero illum soluta doloribus totam iusto.
            </p>
          </div>
        </Col>

        <Col xs={10} md={4} className="p-2">
          <div className="border p-2">
            <div className="d-flex align-items-end">
              <span style={{ width: "64", height: "64" }}>
                <img
                  className="rounded-circle"
                  src={require("../../../../resources/images/customer-2.png")}
                  alt=""
                  width="64"
                  height="64"
                />
              </span>
              <div>
                <span style={{ fontSize: "1.3rem" }}>Tanvir</span>
                <small className="text-secondary d-block">
                  CEO,Skillstacks
                </small>
              </div>
            </div>
            <p className="text-secondary pt-3 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              libero illum soluta doloribus totam iusto.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
