import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      component={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
