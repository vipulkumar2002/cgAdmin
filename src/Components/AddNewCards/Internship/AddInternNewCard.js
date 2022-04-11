import React, { useState } from "react";

import "./AddNewCard.css";
import Internships from "../../../Pages/Internships/Internships";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddInternNewCard = () => {
  const [profile, setProfile] = useState({
    person_name: "",
    company_name: "",
    job_role: "",
    employ_type: "",
    linkedin: "",
    image_url: "",
  });
  const [status, setStatus] = useState();
  function onChageInputFeild(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }
  // let navigate = useNavigate();

  async function addChanges(e) {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:4040/profiles/internship/new`,
        profile
      );
      // console.log(students.data);
      setStatus(true);
    } catch (error) {
      console.log("Something is wrong");
    }
  }
  if (status) {
    return <Internships />;
  }
  return (
    <>
      <div className="card_container">
        <div
          className="Card_body"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Intern Profile
                </h5>
              </div>
              <div className="modal-body">
                <div className="mb-3" id="image_container">
                  <label for="imageurl" className="form-label">
                    Profile Image
                  </label>
                  <img
                    src={profile.image_url}
                    className="image"
                    name="image_url"
                    id="imageUrl"
                    alt="img"
                  />
                </div>
                <div className="mb-3">
                  <label for="imageurl" className="form-label">
                    Image Url
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="imageurl"
                    name="image_url"
                    aria-describedby="Image url"
                    placeholder="https://example.com/hello.jpg"
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>

                <div className="mb-3">
                  <label for="tasktitle" className="form-label">
                    Name Of the Person
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tasktitle"
                    name="person_name"
                    aria-describedby="Person Name"
                    placeholder="eg: Vipul kumar..."
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label for="tasktype" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tasktype"
                    name="company_name"
                    aria-describedby="Company Name"
                    placeholder="eg: Amazon..."
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Position</label>
                  <input
                    type="text"
                    name="job_role"
                    className="form-control"
                    placeholder="eg: work"
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Employ Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="employ_type"
                    placeholder="eg: Intern/job"
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">LinkedIn Url</label>
                  <input
                    className="form-control"
                    name="linkedin"
                    aria-describedby="Task type"
                    placeholder="https://www.linkedin.com/in/example.."
                    onChange={(e) => onChageInputFeild(e)}
                  ></input>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => addChanges(e)}
                  data-bs-dismiss="modal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInternNewCard;
