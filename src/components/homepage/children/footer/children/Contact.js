import React from "react";
import { Col, Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col xs={11} md={6}>
          <h1
            className="font-weight-bold"
            style={{ fontSize: "1.5rem", color: "#2D2D2D" }}
          >
            Let us handle your <br /> project, professionally.
          </h1>
          <p style={{ fontSize: ".9rem" }} className="text-dark pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            assumenda tempora unde similique veniam soluta, nisi sint qui maxime
            sit!
          </p>
        </Col>

        <Col xs={11} md={6}>
          <form>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
            />

            <input
              className="form-control my-2"
              type="text"
              name="name"
              placeholder="Your name / Company's name"
            />

            <textarea
              className="form-control"
              name="message"
              cols="30"
              rows="5"
              placeholder="Your message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn btn-block mt-3 text-white"
              style={{ backgroundColor: "#111430" }}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
