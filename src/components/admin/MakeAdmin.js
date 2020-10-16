import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Col } from "reactstrap";
import { event } from "jquery";

const MakeAdmin = ({ setTitle }) => {
  const history = useHistory();
  const inputRef = useRef();

  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  const handleClick = (e) => {
    e.preventDefault();
    const email = inputRef.current.value;
    if (email.length > 0) {
      Axios.post("http://localhost:5000/makeadmin", {
        email: inputRef.current.value,
      }).then((res) => {
        const data = res.data;
        if (data) {
          alert("make admin operation successful.");
          inputRef.current.value = "";
        } else {
          alert("operation failed.");
        }
      });
    }
  };
  return (
    <Col xs={12} md={6} lg={5} className="py-3">
      <form>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email to make admin"
          ref={inputRef}
          required
        />
        <input
          type="submit"
          onClick={handleClick}
          className="btn btn-outline-success rounded-pill mt-3"
          value="make admin"
        />
      </form>
    </Col>
  );
};

export default MakeAdmin;
