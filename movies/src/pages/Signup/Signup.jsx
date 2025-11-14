import React from "react";
import "./Signup.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onSignUp = async () => {
    if (firstName.length === 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length === 0) {
      toast.warning("Please enter last name");
    } else if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (phone.length === 0) {
      toast.warning("Please enter phone number");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please confirm password");
    } else if (password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const url = `http:://localhost:4000/user/register`;
      const body = { firstName, lastName, email, password, phone };
      const res = await axios.post(url, body);
      if (res.data.status === "success") {
        navigate("/");
        toast.success("Registration successful! You can now log in.");
      } else {
        toast.error(res.data["error"]);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg p-3">
            <div className=" text-center">
              <h2 className="mb-0">Create Account</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name
                </label>
                <input
                  id="firstNameInput"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastNameInput"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>
                <input
                  id="emailInput"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phoneInput"
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="form-control"
                  placeholder="e.g., 123-456-7890"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <input
                  id="passwordInput"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Create a password"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPasswordInput" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPasswordInput"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="d-grid gap-2 mb-3">
                <button onClick={onSignUp} className="btn btn-success btn-lg">
                  Register
                </button>
              </div>

              <div className="text-center mt-3">
                Already have an account? <Link to="/">Login here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
