import React from "react";
import "./About.css";
import logoImage from "../../Assets/800_3684390_3bgoxu2lzlry1alibf1vlwqvm8hm5l1gs9kibu6g_cg-monogram-logo-design.jpg";

const About = () => {
  return (
    <div className="main_content">
      <h1 className="about-title">Welcome to CollegeGenix</h1>
      <p className="about-descrip">
        CollegeGenix, In this platform the student can get the information
        regarding Internships and Placements of students in different companies
        from CDGI college and get the linkedin profiles of the placed students
        and get connected by them.
      </p>
      <div className="about-card-cointainer  col-md-6 col-lg-4">
        <div className="about-card">
          <img src={logoImage} alt="logo" className="card-logo" />
          <h3 className="p-1 text-center">Who we are?</h3>
          <p className="p-1 text-center">
            A bunch of curious, enthusisatic and motivated college students, who
            work together to build solutions to problems that we face every day.
            We build & manage products!
          </p>
        </div>
        <div className="about-card">
          <img src={logoImage} alt="logo" className="card-logo" />
          <h3 className="p-1 text-center">What have we been upto?</h3>
          <p className="p-1 text-center">
            CollegeGenix has been the one-stop solution for students the night
            before exam. We're now building ExamSpace, LearnSpace and the
            ClassSpace App
          </p>
        </div>
        <div className="about-card">
          <img src={logoImage} alt="logo" className="card-logo" />
          <h3 className="p-1 text-center">Whom will you meet at CG?</h3>
          <p className="p-1 text-center">
            Students who are leveraging experiential learning for leading bright
            careers! Tech, Product Management, Data Science Everyone
            contributing in their own way!
          </p>
        </div>
        <div className="about-card">
          <img src={logoImage} alt="logo" className="card-logo" />
          <h3 className="p-1 text-center">Why should you join CG?</h3>
          <p className="p-1 text-center">
            Learn what you love, apply your skills to solve actual problems!
            Learn about GSOC, international internships, placements from the CS
            family's experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
