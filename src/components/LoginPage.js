import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    setError("");

    try {
      await login();
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
