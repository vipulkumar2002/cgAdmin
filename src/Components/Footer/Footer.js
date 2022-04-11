import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* <!-- Section: Social media --> */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          {/* <!-- Left --> */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="/#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="/#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold">CollegeGenix</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-hr" />
                <p>
                  CollegeGenix, a portal where we aim to make the life of every
                  student simple and turn there four years into a smoother
                  ride!! A bunch of curious, enthusisatic and motivated college
                  students , who help you to build solutions to problems that we
                  face every day!!
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-hr" />
                <p>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="/#" className="text-white">
                    Team
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-hr" />
                <p>
                  <i className="fas fa-home mr-3"></i> Indore, Madhya pradesh
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          Copyright © 2022 | collegegenix
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
