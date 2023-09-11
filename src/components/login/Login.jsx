import React, { useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
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

    console.log(data);
    const redirect = location.search ? location.search.split("=")[1] : "/";
    
    if (data.success) {
      navigate(redirect);
    }

   
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
