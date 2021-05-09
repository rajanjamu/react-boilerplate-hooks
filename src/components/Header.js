import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {}
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Boilerplate
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="button--link nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
