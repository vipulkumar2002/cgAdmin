import React from "react";
import "./Internships.css";
//Componenets
import Cards from "../../Components/Cards/Cards";

const Internships = () => {
  return (
    <div className="main_content">
      <h1 className="intern-heading">CollegeSpace - Internships</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <Cards />
      </div>
    </div>
    //internships
  );
};

export default Internships;
