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
      <nav className="navbar navbar-expand-lg navbar-light navbar">
        <div className="container-fluid">
          <div
            className="collapse nav-container navbar-collapse"
            id="navbarNav"
          >
            <div className="logo-container">
              <Link to="/" className="logo-img">
                CollegeGenix
              </Link>
            </div>
            {auth ? (
              <div className="navbar-nav">
                <li className="nav-item dropdown ">
                  <ul
                    className="nav-link dropdown-toggle  text-white fw-bold"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CollegeSpace
                  </ul>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item text-black text-center "
                        to="/internships"
                      >
                        Internships
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-black text-center"
                        to="/placements"
                      >
                        Placements
                      </Link>
                    </li>
                  </ul>
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
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
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
                <li className="nav-item ">
                  <Link
                    onClick={logout}
                    className="nav-link active  text-white fw-bold"
                    to="/login"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-nav">
                <li className="nav-item ">
                  <Link
                    className="nav-link active  text-white fw-bold"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </div>
            )}
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navabar;
