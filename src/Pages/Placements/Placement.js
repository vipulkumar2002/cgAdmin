import React from "react";
import "./Placements.css";
// Components
import PlacementCard from "../../Components/Cards/PlacementCard";

const Placement = () => {
  return (
    <div className="main_content">
      <h1 className="placement-heading">CollegeSpace - Placements</h1>
      <div className="cards row col-md-6 col-lg-4 ">
        <PlacementCard />
      </div>
    </div>
  );
};

export default Placement;
