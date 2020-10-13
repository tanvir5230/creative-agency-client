import React from "react";
import Contact from "../children/Contact";
import Copyright from "../children/Copyright";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "100px",
        padding: "50px 0",
        backgroundColor: "#fbd062",
      }}
    >
      <Contact></Contact>
      <Copyright />
    </footer>
  );
};

export default Footer;
