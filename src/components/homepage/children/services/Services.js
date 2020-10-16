import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { userContext } from "../../../../App";
import Loader from "../../../loader/Loader";
import "./services.css";

const Services = () => {
  const { url } = useContext(userContext);
  const [services, setServices] = useState(null);
  useEffect(() => {
    Axios.get(url + "/services").then((res) => {
      if (res.status === 200) {
        setServices(res.data);
      } else {
        setServices(res.data);
      }
    });
  }, [url]);
  return (
    <Container>
      <h3 className="text-center font-weight-bold pb-5">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h3>
      <Row className="justify-content-center align-items-center">
        {services === null && <Loader />}
        {services && services === "error" && (
          <p className="text-success text-center">Couldn't load data.</p>
        )}
        {services &&
          services !== "error" &&
          services.map((item) => {
            return (
              <Col xs={10} md={4} className="service-hover p-3">
                <Link className="nav-link text-dark" to="/client">
                  <div className="d-flex flex-column align-items-center text-center px-2">
                    <img
                      src={item.image}
                      alt=""
                      width="74"
                      height="74"
                      className="rounded-circle"
                    />
                    <h4 className="mt-2">{item.title}</h4>
                    <p className="py-2" style={{ fontSize: ".9rem" }}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Services;
