import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "reactstrap";
import { useContext } from "react";
import { userContext } from "../../App";
export const Reviews = ({ setTitle }) => {
  const { url } = useContext(userContext);

  const { register, handleSubmit, errors } = useForm();
  const user = JSON.parse(localStorage.getItem("user"));
  const { photoUrl } = user;

  const onSubmit = (data, e) => {
    data.image = photoUrl;
    fetch(url + "/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("review added.");
          e.target.reset();
        } else {
          alert("couldn't add review.try again.");
        }
      });
  };

  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  }, [newTitle, setTitle]);
  return (
    <Container fluid>
      <Row className="justify-content-center justify-content-md-start">
        <Col xs={11} md={6} lg={5}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ height: "400px" }}>
            <input
              type="text"
              name="name"
              className="form-control mt-3"
              placeholder="Your name"
              ref={register({ maxLength: "20", minLength: "3" })}
              required
            />
            {errors.name && (
              <span className="text-danger text-center">
                Name must be between 3 to 20 characters
              </span>
            )}

            <input
              type="text"
              name="companyName"
              className="form-control mt-3"
              placeholder="Your Company's Name"
              ref={register({ maxLength: "20", minLength: "3" })}
              required
            />
            {errors.name && (
              <span className="text-danger text-center">
                Name must be between 3 to 20 characters
              </span>
            )}

            <textarea
              name="details"
              className="form-control mt-3"
              rows="3"
              placeholder="Details"
              ref={register}
              required
            ></textarea>

            <input type="submit" className="btn btn-dark mt-3" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};
