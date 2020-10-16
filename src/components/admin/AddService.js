import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Col } from "reactstrap";
import { userContext } from "../../App";

const AddService = ({ setTitle }) => {
  const { url } = useContext(userContext);
  const history = useHistory();
  const { register } = useForm();

  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  return (
    <Col xs={12} md={7} lg={5}>
      <form
        method="POST"
        enctype="multipart/form-data"
        action={url + `/addservice`}
      >
        <input
          className="form-control mt-3"
          name="title"
          ref={register}
          placeholder="Service title"
          require
        />
        <textarea
          className="form-control mt-3"
          name="description"
          ref={register}
          placeholder="service Description"
          rows="3"
          required
        ></textarea>

        <div className="position-relative my-3">
          <input
            type="file"
            name="iconFile"
            className="form-control-file"
            required
          />
          <span className="custom-file-style d-flex justify-content-center align-items-center">
            <i className="fa fa-upload mr-3"></i>
            <span className="text-center">upload project file</span>
          </span>
        </div>
        <input type="submit" className="btn btn-outline-success" />
      </form>
    </Col>
  );
};

export default AddService;
