import React from "react";
import { Container } from "reactstrap";
import BigCompanies from "../children/BigCompanies";
import HeaderIntro from "../children/HeaderIntro";
import MyNavbar from "../children/MyNavbar";
import "../style/header.css";

const Header = () => {
  return (
    <>
      <header>
        <MyNavbar />
        <Container>
          <HeaderIntro />
        </Container>
      </header>
      <BigCompanies />
    </>
  );
};

export default Header;
