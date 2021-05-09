import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import { auth } from "./vendors/firebase";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged In");
  } else {
    console.log("Logged Out");
  }
});
