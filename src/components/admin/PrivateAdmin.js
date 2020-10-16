import React from "react";
import { Redirect, Route } from "react-router-dom";
import AccessDenied from "../AccessDenied";

export function PrivateAdmin({ children, ...rest }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const userType = localStorage.getItem("userType");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          userType === "admin" ? (
            children
          ) : (
            <AccessDenied />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
