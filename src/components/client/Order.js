import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import "./client.css";
// import { useState } from "react";

export const Order = ({ setTitle }) => {
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];

  // form
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    let formData = data;
    formData.projectFile = data.projectFile[0];
    console.log(formData);
    e.target.reset();
  };
  // const [services,serServices]=useState(null) fetch services

  //demo
  const services = [
    "graphics design",
    "web developmen",
    "mobile app development",
  ];

  useEffect(() => {
    setTitle(newTitle);
  });
  return (
    <Container fluid>
      <Row className="justify-content-center justify-content-md-start">
        <Col xs={11} md={6} lg={5}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ height: "400px" }}>
            <input
              name="name"
              className="form-control mt-3"
              placeholder="Your name / Company's name"
              ref={register({ maxLength: "20", minLength: "3" })}
              required
            />
            {errors.name && (
              <span className="text-danger text-center">
                Name must be between 3 to 20 characters
              </span>
            )}
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="form-control mt-3"
              ref={register}
              required
            />
            <select
              name="orderedService"
              className="form-control mt-3"
              ref={register}
              required
            >
              {services.map((service) => {
                return (
                  <option key={service} value={service}>
                    {service}
                  </option>
                );
              })}
            </select>

            <textarea
              name="projectDetails"
              className="form-control mt-3"
              rows="3"
              placeholder="Project Details"
              ref={register}
            ></textarea>
            <div className="d-flex justify-content-between mt-3">
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                placeholder="price"
                ref={register({ min: 30 })}
                required
              />
              <div className="position-relative">
                <input
                  type="file"
                  name="projectFile"
                  className="form-control-file"
                  ref={register}
                  required
                />
                <span className="custom-file-style d-flex justify-content-center align-items-center">
                  <i className="fa fa-upload mr-3"></i>
                  <span className="text-center">upload project file</span>
                </span>
              </div>
            </div>
            {errors.price && (
              <p className="text-danger text-center">
                We don't work under 30 dollars.
              </p>
            )}
            <input type="submit" className="btn btn-dark mt-3" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};
