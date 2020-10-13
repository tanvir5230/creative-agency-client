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

      <section
        style={{
          marginTop: "100px",
          padding: "50px 0",
        }}
      >
        <Services />
      </section>

      <section
        style={{
          backgroundColor: "#111430",
          marginTop: "100px",
          padding: "50px 0",
        }}
      >
        <MyCarousel />
      </section>

      <section
        style={{
          marginTop: "100px",
          padding: "50px 0",
        }}
      >
        <Feedback />
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
