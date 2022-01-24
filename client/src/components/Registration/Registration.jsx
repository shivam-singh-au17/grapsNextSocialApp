import React from "react";
import google from "../img/google.png";
import { Link } from "react-router-dom";
import "../style.css";

const Registration = () => {
  return (
    <div className="RegistrationBox mt-4">
      <div className="mt-2">
        <div className="grapsnextsocialRegistration text-center">
          <div>
            <img
              className="img-fluid"
              src="http://www.grapsnextsocial.com/img/logo.png"
              alt=""
            />
            <span className="display-6">raps Next Social</span>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label fs-5">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label fs-5">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label fs-5">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Mobile"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label fs-5">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit" className="btn btn-success fs-5">
          SIGN UP
        </button>
        <div class="d-grid gap-2 my-3">
          <button
            class="btn btn-primary text-center RegistrationbuttonGoogle"
            type="button"
          >
            <div>
              <img className="ms-5 me-4" src={google} alt="google" />
              <span className="fs-5">Log in with Google</span>
            </div>
          </button>
        </div>
        <div className="bg-secondary fs-5 mb-4">
          <div className="RegistrationaccountBox">
            <span className="text-light">Have an account?</span>
            <Link className="nav-link text-light" to="/">
              <button className="btn btn-info fw-bold">LOG IN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
