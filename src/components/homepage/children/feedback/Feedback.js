import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { userContext } from "../../../../App";
import Loader from "../../../loader/Loader";

const Feedback = () => {
  const [reviews, setReviews] = useState(null);
  const { url } = useContext(userContext);

  useEffect(() => {
    fetch(url + "/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => {
        setReviews("empty");
      });
  });
  return (
    <Container>
      <h3 className="text-center pb-3">
        Clients{" "}
        <span className="font-weight-bold" style={{ color: "#7ab259" }}>
          Feedback
        </span>
      </h3>
      <Row className="flex-wrap justify-content-center align-items-baseline">
        {reviews === "empty" && (
          <p className="text-center text-warning">could'nt load reviews.</p>
        )}
        {reviews === null && <Loader />}
        {reviews &&
          reviews !== "empty" &&
          reviews.map((review) => {
            return (
              <Col xs={10} md={4} className="p-2">
                <div className="border p-2">
                  <div className="d-flex align-items-end">
                    <span style={{ width: "64", height: "64" }}>
                      <img
                        className="rounded-circle"
                        src={review.image}
                        alt=""
                        width="64"
                        height="64"
                      />
                    </span>
                    <div>
                      <span style={{ fontSize: "1.3rem" }}>{review.name}</span>
                      <small className="text-secondary d-block">
                        CEO,{review.companyName}
                      </small>
                    </div>
                  </div>
                  <p className="text-secondary pt-3 px-2">{review.details}</p>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Feedback;
