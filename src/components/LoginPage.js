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
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Login</h1>
          {error && <p>{error}</p>}
          <button className="btn btn-outline-secondary" onClick={handleLogin}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
