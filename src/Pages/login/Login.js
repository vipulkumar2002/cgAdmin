import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const [userId, setUserId] = useState("");

  const [password, setPassword] = useState("");
  // console.log(password);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:4040/users/admin/login", {
        userId,
        password,
      });

      // console.log(result.data.token);
      const user = result.data.token;
      // setUserId(user);
      // const pass = result.data.token;
      // setPassword(pass);

      // console.log(pass);
      if (user) {
        localStorage.setItem("user", user);

        Swal.fire(
          {
            icon: "success",
            title: "Login  Successful",
          },
          navigate("/")
        );
      } else {
        alert("User not found match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // function userHandlar(e) {
  //   let item = e.target.value;

  //   if (item.length < 4) {
  //     setUserIdErr(true);
  //   } else setUserIdErr(false);
  //   // setUserId(item);
  // }
  // function passHandlar(e) {
  //   let item = e.target.value;
  //   if (item.length < 6) {
  //     setPassErr(true);
  //   } else setPassErr(false);
  //   // setPassword(item);
  // }

  return (
    <div className="main_content">
      <div className="login-container ">
        <form className="gform">
          <h4 className="text-bold ">Log In, Here</h4>
          <p>We'll never share your email with anyone else.</p>

          <div className="mb-3  ">
            <input
              type="email"
              className="form-control"
              id="staticEmail"
              name="email"
              value={userId}
              aria-describedby="emailHelp"
              placeholder="Email ID"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          {/* <div className="text-center m-2 text-danger">
            {userIdErr ? <span>Invalid User Name</span> : ""}
          </div> */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="text-center m-2 text-danger">
            {passErr ? <span>Invalid PassWord</span> : ""}
          </div> */}
          <button
            onClick={handleLogin}
            className="btn btn-primary form-control fs-5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
