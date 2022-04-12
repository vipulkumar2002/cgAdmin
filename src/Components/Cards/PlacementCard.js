import React, { useEffect, useState } from "react";
import "./Cards.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Swal from "sweetalert2";

const PlacementCard = () => {
  const [profiles, setProfiles] = useState([]);
  // console.log(name);
  useEffect(() => {
    getAllProfiles();
  }, []);
  async function getAllProfiles() {
    try {
      const profiles = await axios.get(
        `http://localhost:4040/profiles/placements`
      );
      // console.log(profiles.data.name.data);
      setProfiles(profiles.data.placements);
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  const deleteProfile = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:4040/profiles/placement/${id}`
      );
      if (result) {
        Swal.fire({
          icon: "success",
          title: "Profile Deleted Successfully",
        });
        getAllProfiles();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {profiles.map((profile, i) => {
        return (
          <div className="card main-container" key={i}>
            <div className="div_1 text-muted">
              <div className="img-div">
                <img
                  src={profile.image_url}
                  className="card-image"
                  id="imageUrl"
                  alt="img"
                />
              </div>
              <div className="card-body">
                <h6 id="personName" name="person_Name">
                  {profile.person_name}
                </h6>
                <hr />
                <h6 id="jobRole" name="job_Role">
                  {profile.job_role}
                </h6>
                <hr />
                <h6 id="companyName"> {profile.company_name}</h6>
              </div>
            </div>
            <div className="buttons">
              <div>
                <Link
                  className="btn btn-success"
                  to={`/updateCardP/${profile._id}`}
                >
                  <AiFillEdit />
                </Link>
              </div>

              <div>
                <button className="btn btn-danger">
                  <AiFillDelete onClick={(e) => deleteProfile(profile._id)} />
                </button>
              </div>

              <div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  className="btn btn-primary "
                  rel="noopener noreferrer"
                >
                  <ImLinkedin />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlacementCard;
