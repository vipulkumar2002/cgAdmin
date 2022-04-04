import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userIdErr, setUserIdErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(userId, password);

    let result = await fetch("http://localhost:4000/login", {
      method: "Post",
      body: JSON.stringify({ userId, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.userId) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      alert("Log In success :)");
    } else {
      alert("data not match");
    }
  };

  function userHandlar(e) {
    let item = e.target.value;

    if (item.length < 4) {
      setUserIdErr(true);
    } else setUserIdErr(false);
    setUserId(item);
  }
  function passHandlar(e) {
    let item = e.target.value;
    if (item.length < 6) {
      setPassErr(true);
    } else setPassErr(false);
    setPassword(item);
  }

  return (
    <div className="main_content">
      <div className="login-container col-sm-4 offset-sm-4">
        <form className="gform">
          <h4 className="text-bold ">Log In, Here</h4>
          <p>We'll never share your email with anyone else.</p>

          <div className="mb-3  ">
            <input
              type="email"
              className="form-control"
              id="staticEmail"
              name="email"
              // value={userId}
              aria-describedby="emailHelp"
              placeholder="Email ID"
              onChange={userHandlar}
            />
          </div>
          <div className="text-center m-2 text-danger">
            {userIdErr ? <span>Invalid User Name</span> : ""}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              // value={password}
              placeholder="Password"
              onChange={passHandlar}
            />
          </div>
          <div className="text-center m-2 text-danger">
            {passErr ? <span>Invalid PassWord</span> : ""}
          </div>
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
