import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      component={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
