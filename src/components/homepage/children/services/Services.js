import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { userContext } from "../../../../App";
import Loader from "../../../loader/Loader";
import "./services.css";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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

  // react spring
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Container>
      <h3 className="text-center font-weight-bold pb-5">
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>
      </h3>
      <Row className="justify-content-center align-items-baseline">
        {services === null && <Loader />}
        {services && services === "error" && (
          <p className="text-success text-center">Couldn't load data.</p>
        )}
        {services &&
          services !== "error" &&
          services.map((item) => {
            return (
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
                className="col-11 col-md-4 mt-md-0"
              >
                <Link className="nav-link text-dark" to="/client">
                  <div className="d-flex flex-column align-items-center text-center px-2 mt-3 mt-md-0 card border-0">
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
              </animated.div>
            );
          })}
      </Row>
    </Container>
  );
};

export default Services;
