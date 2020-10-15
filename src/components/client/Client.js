import React, { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../templates/Sidebar";
import Topbar from "../templates/Topbar";
import { Order } from "./Order";
import { Reviews } from "./Reviews";
import { OrderedList } from "./OrderedList";

const Client = () => {
  const { url, path } = useRouteMatch();
  const [title, setTitle] = useState("Order");
  const navItemsArr = [
    { name: "order", icon: "shopping-cart" },
    { name: "ordered list", icon: "briefcase" },
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
            <Route path={`${path}/ordered list`}>
              <OrderedList setTitle={setTitle} />
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

export default Client;
