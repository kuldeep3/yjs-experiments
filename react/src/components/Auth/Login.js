import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await loginUser({ userName, password });
    setToken(token);
  };

  return (
    <div className="loginWrapper">
      <h1>Please Login in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(evt) => setUserName(evt.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
