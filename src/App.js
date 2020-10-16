import React, { useState } from "react";
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
import { createContext } from "react";

import * as firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from "./firebaseConfig";
import { useEffect } from "react";

firebase.initializeApp(firebaseConfig);

export const userContext = createContext();
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (loggedInUser) {
        const userInfo = {
          name: loggedInUser.displayName,
          photoUrl: loggedInUser.photoURL,
          email: loggedInUser.email,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(loggedInUser);
      } else {
        localStorage.clear();
        setUser(null);
      }
    });
  }, [user]);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  // const url = "http://localhost:5000";
  const url = "https://creative-agency-t.herokuapp.com";

  return (
    <>
      <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
          handleLogout: handleLogout,
          url: url,
        }}
      >
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
      </userContext.Provider>
    </>
  );
}

export default App;
