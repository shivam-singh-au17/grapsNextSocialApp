import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const jsonData = {
      name: name,
      email: email,
      mobile: phone,
      password: password,
    };

    axios.post(
      "https://server-by-shivam-singh.herokuapp.com/register",
      jsonData
    );
    alert("Successfully Submited go to Login page for Login...");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

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
        <div className="mb-3">
          <label htmlFor="Name" className="form-label fs-5">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="Name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor="Mobile" className="form-label fs-5">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="Mobile"
            placeholder="Enter Your Mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
          className="btn btn-success fs-5"
          onClick={handleSignup}
        >
          SIGN UP
        </button>

        <div className="bg-secondary fs-5 my-4">
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
