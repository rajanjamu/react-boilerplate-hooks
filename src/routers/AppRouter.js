import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import DashboardPage from "../components/DashboardPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={DashboardPage} />
          <PublicRoute path="/login" component={LoginPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
