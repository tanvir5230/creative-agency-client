import React from "react";
import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../templates/Sidebar";
import Topbar from "../templates/Topbar";
import AddService from "./AddService";
import MakeAdmin from "./MakeAdmin";
import { ProjectList } from "./ProjectList";

const Admin = () => {
  const { url, path } = useRouteMatch();
  const [title, setTitle] = useState("Order");
  const navItemsArr = [
    { name: "service list", icon: "briefcase" },
    { name: "add service", icon: "plus" },
    { name: "make admin", icon: "user-plus" },
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
            <Route path={`${path}/service list`}>
              <ProjectList setTitle={setTitle} />
            </Route>

            <Route path={`${path}/add service`}>
              <AddService setTitle={setTitle} />
            </Route>

            <Route path={`${path}/make admin`}>
              <MakeAdmin setTitle={setTitle} />
            </Route>
            <Redirect to={url + "/service list"} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
