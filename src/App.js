import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Homepage from "./components/homepage/parent/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import { PrivateAdmin } from "./components/admin/PrivateAdmin";
import { PrivateClient } from "./components/client/PrivateClient";
import Client from "./components/client/Client";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateAdmin path="/admin">
            <Admin />
          </PrivateAdmin>

          <PrivateClient path="/client">
            <Client />
          </PrivateClient>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
