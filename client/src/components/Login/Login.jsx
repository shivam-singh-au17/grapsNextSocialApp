import React from "react";
import SlidShow from "../SlidShow/SlidShow";
import { Link } from "react-router-dom";
import "../style.css";

const Login = () => {
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
            />
          </div>
          <button type="submit" className="btn mt-3 btn-success fw-bold">
            LOG IN
          </button>
          <div className="bg-secondary fs-5 p-3 my-5 accountBox">
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
