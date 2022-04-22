import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navabar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    Swal.fire(
      {
        icon: "success",
        title: "Logout Successful",
      },
      navigate("/login")
    );
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg d-flex justify-content-between navbar-light">
        <Link
          to="/"
          class="navbar-brand  text-white logo-img display-1 fw-bold"
        >
          CollegeGenix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#
          "
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse nav-container navbar-collapse logo-container"
          id="navbarNav"
        >
          {auth ? (
            <ul class="navbar-nav mr-auto">
              <li className="nav-item dropdown ">
                <ul
                  className="nav-link dropdown-toggle  text-white fw-bold"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  CollegeSpace
                </ul>
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    className="dropdown-item text-black text-center "
                    to="/internships"
                  >
                    Internships
                  </Link>

                  <Link
                    className="dropdown-item text-black text-center"
                    to="/placements"
                  >
                    Placements
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-white fw-bold"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <ul
                  className="nav-link dropdown-toggle  text-white fw-bold"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add New Profile
                </ul>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item text-black text-center "
                      to="/addInternNewCard"
                    >
                      Internship
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-black text-center"
                      to="/addPlacementNewCard"
                    >
                      Placement
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  onClick={logout}
                  className="nav-link active  text-white fw-bold"
                  to="/login"
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-item mt-3">
              <Link
                className="nav-link active text-center text-white fw-bold"
                to="/login"
              >
                Login
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navabar;
