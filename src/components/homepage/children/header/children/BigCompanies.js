import React from "react";
import { Container, Row } from "reactstrap";

const BigCompanies = () => {
  return (
    <Container className="big-companies">
      <Row className="justify-content-center align-items-center flex-wrap">
        <img
          src={require("../../../../../resources/images/logos/slack.png")}
          alt=""
          width="140"
          height="36"
        />
        <img
          src={require("../../../../../resources/images/logos/google.png")}
          alt=""
          width="129"
          height="44"
        />
        <img
          src={require("../../../../../resources/images/logos/uber.png")}
          alt=""
          width="99"
          height="56"
        />
        <img
          src={require("../../../../../resources/images/logos/netflix.png")}
          alt=""
          width="120"
          height="67"
        />
        <img
          src={require("../../../../../resources/images/logos/airbnb.png")}
          alt=""
          width="161"
          height="51"
        />
      </Row>
    </Container>
  );
};

export default BigCompanies;
