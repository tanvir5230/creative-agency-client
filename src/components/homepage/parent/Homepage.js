import React from "react";
import MyCarousel from "../children/carousel/MyCarousel";
import Feedback from "../children/feedback/Feedback";
import Footer from "../children/footer/parent/Footer";
import Header from "../children/header/parent/Header";
import Services from "../children/services/Services";

const Homepage = () => {
  return (
    <>
      <Header />
      <Services />
      <MyCarousel />
      <Feedback />
      <Footer />
    </>
  );
};

export default Homepage;
