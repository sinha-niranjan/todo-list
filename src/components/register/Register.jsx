import React, { useState } from "react";
import "./style.css";

const Register = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <div className="login">
        <div className="box">
          <h5>Register Page</h5>
  
          <div className="input">
          <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button>Register</button>
          </div>
        </div>
      </div>
    );
}

export default Register
