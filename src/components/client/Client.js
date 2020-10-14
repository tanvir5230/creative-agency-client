import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../templates/Sidebar";
import Topbar from "../templates/Topbar";

const Client = () => {
  const { url, path } = useRouteMatch();
  const [title, setTitle] = useState("Order");
  const navItemsArr = [
    { name: "order", icon: "shopping-cart" },
    { name: "service list", icon: "briefcase" },
    { name: "reviews", icon: "commenting-o" },
  ];
  return (
    <Container fluid className="px-3 m-0">
      <Row className="align-items-center" style={{ height: "10vh" }}>
        <Topbar title={title} username="tanvir" />
      </Row>
      <Row style={{ height: "90vh" }}>
        <Sidebar url={url} navItemsArr={navItemsArr} />

        <Col
          xs={10}
          md={9}
          lg={10}
          className="h-100 w-100 rounded-lg"
          style={{ backgroundColor: "#F4F7FC" }}
        >
          <Switch>
            <Route path={`${path}/order`}>
              <Order setTitle={setTitle} />
            </Route>
            <Route path={`${path}/service list`}>
              <Servicelist setTitle={setTitle} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews setTitle={setTitle} />
            </Route>
            <Redirect to={url + "/order"} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

const Order = ({ setTitle }) => {
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  return <p>Order</p>;
};

const Servicelist = ({ setTitle }) => {
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  return <p>Servicelist</p>;
};

const Reviews = ({ setTitle }) => {
  const history = useHistory();
  const newTitle = history.location.pathname.split("/")[2];
  useEffect(() => {
    setTitle(newTitle);
  });
  return <p>reviews</p>;
};
export default Client;
