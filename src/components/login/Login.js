import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import * as firebase from "firebase/app";
import { useContext } from "react";
import { userContext } from "../../App";

const Login = () => {
  const { setUser, url } = useContext(userContext);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    history.replace(from);
  }

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        return loggedInUser;
      })
      .then((userData) => {
        fetch(url + "/checkUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userData.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            const { userType } = data;
            localStorage.setItem("userType", userType);
            if (userType === "admin") {
              history.push("/admin");
            } else {
              userData.role = "client";
              history.replace(from);
            }
          });
      });
  };
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center mb-3" style={{ height: "50px" }}>
        <Link className="nav-link" to="/">
          <img
            src={require("../../resources/images/logos/logo.png")}
            width="130"
            height="40"
            alt=""
          />
        </Link>
      </Row>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "350px" }}
      >
        <Col
          xs={11}
          md={6}
          lg={5}
          className="h-100 d-flex justify-content-center align-items-center border shadow"
        >
          <div className="text-center ">
            <h4 className="font-weight-bold ">login with</h4>
            <div
              className="border clearfix rounded-pill p-1 my-3 btn btn-block"
              onClick={handleLogin}
            >
              <img
                src={require("../../resources/images/icons/google-icon.png")}
                alt=""
                width="30"
                height="30"
                className="float-left"
              />
              <span className="w-100">Continue With Google</span>
            </div>
            <p>
              Don't have an account? <Link to="/login">Create an account</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
