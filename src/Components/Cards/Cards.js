import React, { useEffect, useState } from "react";
import "./Cards.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = ({ name }) => {
  const [profiles, setProfiles] = useState([]);
  // console.log(profiles.data);
  useEffect(() => {
    getAllProfiles();
  }, []);
  async function getAllProfiles() {
    try {
      const profiles = await axios.get(`http://localhost:7000/${name}`);
      // console.log(profile.data);
      setProfiles(profiles.data);
    } catch (error) {
      console.log("Something went wrong");
    }
  }
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
                <br />
                <h6 id="jobRole" name="job_Role">
                  {profile.job_role}
                </h6>
                <br />
                <h6 id="companyName"> {profile.company_name}</h6>
              </div>
            </div>
            <div className="buttons">
              <div>
                <Link
                  className="btn btn-primary"
                  to={`/UpdateCardI/${profile.id}`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <Link
                  className="btn btn-primary"
                  to={`/addNewCard/${profile.id}`}
                >
                  Delete
                </Link>
              </div>

              <div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  className="btn btn-primary "
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
