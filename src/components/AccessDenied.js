import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="h-100 w-100">
      <Link to="/">
        <i className="fa fa-arrow-left fa-2x"></i>
      </Link>
      <p className="text-danger text-center" style={{ marginTop: "100px" }}>
        you don't have access to the section.
      </p>
    </div>
  );
};

export default AccessDenied;
