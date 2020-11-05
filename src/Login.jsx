import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:7000/login", data)
      .then((response) => {
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("userData", JSON.stringify(response.data));
        history.push("/home");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="form-control"
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            className="form-control"
          ></input>
        </label>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
