import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function DashboardPage() {
  const [error, setError] = useState("");
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>{error}</p>}
      <p>You are logged in: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
