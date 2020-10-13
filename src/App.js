import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/homepage/parent/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
