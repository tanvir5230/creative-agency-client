import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./carousel.css";
import img1 from "../../../../resources/images/carousel-1.png";
import img2 from "../../../../resources/images/carousel-2.png";
import img3 from "../../../../resources/images/carousel-3.png";

const items = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
];

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#111430" }}
        >
          <img
            className="m-auto py-md-5 px-3 px-md-0"
            src={item.src}
            alt={item.altText}
          />
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <h1
        style={{
          backgroundColor: "#111430",
          position: "relative",
          top: "50px",
          zIndex: 1,
        }}
        className="text-center text-white py-5 font-weight-bold"
      >
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </h1>
      <Carousel
        enableTouch={true}
        slide={true}
        autoPlay={true}
        interval={1500}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </>
  );
};

export default MyCarousel;
