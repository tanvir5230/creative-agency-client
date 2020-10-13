import React from "react";
import Contact from "../children/Contact";
import Copyright from "../children/Copyright";

const Footer = () => {
  return (
    <footer className="mt-5" style={{ backgroundColor: "#fbd062" }}>
      <Contact></Contact>
      <Copyright />
    </footer>
  );
};

export default Footer;
