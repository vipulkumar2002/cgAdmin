import React from "react";
import "./Placements.css";
// Components
import Cards from "../../Components/Cards/Cards";

const Placement = () => {
  return (
    <div className="main_content">
      <h1 className="placement-heading">CollegeSpace - Placements</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <Cards />
      </div>
    </div>
  );
};

export default Placement;
