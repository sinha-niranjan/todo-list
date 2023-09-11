import React, { useState } from "react";
import "./style.css";
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const handleLogin = async () => {
    const { data } = await axios.post(
      `https://backend-todo-list-sinha-niranjan.vercel.app/api/v1/login`,
      { email, password },
      config
    );

    console.log(data)
  };

  return (
    <div className="login">
      <div className="box">
        <h5>Login Page</h5>

        <div className="input">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
