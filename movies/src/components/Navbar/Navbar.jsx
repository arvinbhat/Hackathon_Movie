import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../providers/AuthProvider";
// import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const onLogout = () => {
    // remove all the cached items
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");

    // set the user to null
    // setUser(null);

    // redirect to Login page
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home/properties"></Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/all-movies"
              >
                All Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/my-reviews"
              >
                My Review
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/shared-reviews"
              >
                Shared With Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/all-reviews"
              >
                All Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/edit-profile"
              >
                Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/home/changePass"
              >
                Change Password
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={onLogout}
                className="nav-link"
                aria-current="page"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
