import React, { useState, useContext } from "react";
import SlidShow from "../SlidShow/SlidShow";
import { Link } from "react-router-dom";
import "../style.css";
import axios from "axios";
import { ThemeContexts1 } from "../Contexts/ThemeContexts1";
import { ThemeContexts2 } from "../Contexts/ThemeContexts2";

const Login = () => {
  const [status, setStatus] = useState(false);
  const { handleChangeTheme1 } = useContext(ThemeContexts1);
  const { setTheme2 } = useContext(ThemeContexts2);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const jsonData = {
      email: email,
      password: password,
    };

    axios
      .post("https://server-by-shivam-singh.herokuapp.com/login", jsonData)
      .then((data) => {
        setTheme2(data.data);
        if (data.data.token) {
          alert("Successfully Login ...");
          handleChangeTheme1();
        }
      })
      .catch(() => {
        setStatus(true);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="row loginMaxWidth">
      <div className=".col-xl-12 col-6 mt-4 SlidShowBox">
        <SlidShow />
      </div>
      <div className=".col-xl-12 col-6 mt-5 loginBoxMain">
        <div className="mt-2">
          <div className="grapsnextsocial">
            <img src="http://www.grapsnextsocial.com/img/logo.png" alt="" />
            <span className="display-6">raps Next Social</span>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label fs-5">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn mt-3 btn-success fw-bold"
            onClick={handleLogin}
          >
            LOG IN
          </button>
          {status ? (
            <div id="emailHelp" className="form-text text-danger fw-bold mt-2">
              Please provide correct information ...
            </div>
          ) : (
            ""
          )}
          <div className="bg-secondary fs-5 p-3 my-4 accountBox">
            <span className="text-light ms-5"> Don't have an account yet?</span>
            <Link className="nav-link text-light" to="/signup">
              <button className="btn btn-info fw-bold">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
