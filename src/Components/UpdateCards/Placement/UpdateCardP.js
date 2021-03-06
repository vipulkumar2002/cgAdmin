import React from "react";
import "../Internships/UpdateCard.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateCardP = () => {
  const { id } = useParams();
  // console.log(id);
  const [profile, setProfile] = useState({
    person_name: "",
    company_name: "",
    job_role: "",
    employ_type: "",
    linkedin: "",
    image_url: "",
  });

  useEffect(() => {
    getProfileDetailes();
  }, [id]);

  async function getProfileDetailes() {
    try {
      const profiles = await axios.get(
        `http://localhost:4040/profiles/placement/${id}`
      );
      // console.log(students.data);
      setProfile(profiles.data.placement);
    } catch (err) {
      console.log("Something is wrong");
    }
  }
  function onChageInputFeild(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }
  let navigate = useNavigate();
  async function saveChanges(e) {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4040/profiles/placement/${id}`,
        profile
      );
      Swal.fire({
        icon: "success",
        title: "Profile Updated Successfully",
      });
      navigate("/placements");
    } catch (error) {
      console.log("Somthing went Wrong from Update");
    }
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
                  Update Plcement Profile
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
                    value={profile.image_url}
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
                    value={profile.person_name}
                    aria-describedby="Task title"
                    placeholder="eg: API Integration"
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
                    value={profile.company_name}
                    aria-describedby="Task type"
                    placeholder="eg: work"
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tasktype"
                    name="job_role"
                    value={profile.job_role}
                    aria-describedby="Task type"
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
                    value={profile.employ_type}
                    aria-describedby="Task type"
                    placeholder="eg: Intern/job"
                    onChange={(e) => onChageInputFeild(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">LinkedIn Url</label>
                  <input
                    type="url"
                    className="form-control"
                    name="linkedin"
                    value={profile.linkedin}
                    placeholder="https://www.linkedin.com/in/example.."
                    onChange={(e) => onChageInputFeild(e)}
                  ></input>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => saveChanges(e)}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCardP;
