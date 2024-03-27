import React, { useState } from "react";

import "./LoginForm.css";
import { loginValidation } from "./utils";
function LoginForm() {
  const [delay, setDelay] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataLogin = await loginValidation(login, setDelay);
    console.log(dataLogin);

    setLogin(dataLogin);
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        {login.error ? <p className="login-gagal">{login.message}</p> : <p></p>}
        <button type="submit" className="btn">
          {delay ? "Menunggu..." : "Login"}
        </button>
        <div className="register-link">
          <p>
            Dont have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
