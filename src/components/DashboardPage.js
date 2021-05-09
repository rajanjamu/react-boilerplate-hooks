import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  
  return (
    <div>
      <div className="container">
        <h1>Dashboard</h1>
        <p>You are logged in as {user.email}</p>
      </div>
    </div>
  );
}
