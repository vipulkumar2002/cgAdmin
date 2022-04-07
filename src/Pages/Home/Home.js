import React from "react";
import "./Home.css";
import img1 from "./Home_img/demo10.jpg";
import img2 from "./Home_img/demo13.jpg";
import img3 from "./Home_img/demo14.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-100 img_bg"
                alt="Not found"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100 img_bg"
                alt="Not found"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100 h-100 img_bg"
                alt="Not found"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="home_content">
          <div className="container">
            <div className="home_text">
              <h1>Collegegenix</h1>
              <p>Dream It, Believe It, Do It.</p>
              <p className="home_discription">
                Here you can get information regarding Internship & Placement of
                Students in different companies <br /> from CDGI and get
                connected by them.
              </p>
              <button className="btn_home ">
                <Link className="text-decoration-none" to="/aboutus">
                  Know More
                </Link>

                <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
