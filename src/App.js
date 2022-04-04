import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
//Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Placements from "./Pages/Placements/Placement";
import Internships from "./Pages/Internships/Internships";
import About from "./Pages/About/About";
import AddNewCards from "./Components/AddNewCards/Internship/AddNewCards";
import UpdateCard from "./Components/UpdateCards/Internships/UpdateCardI";
import ProtectedRoute from "./Components/PrivateRought/ProtectedRoute";
import Logout from "./Components/Logout/Logout";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/placements" element={<Placements />} />
            <Route exact path="/internships" element={<Internships />} />
            <Route exact path="/aboutus" element={<About />} />
            <Route exact path="/addNewCard" element={<AddNewCards />} />
            <Route path="/logout" element={<Logout />} />
            <Route exact path="/UpdateCardI/:id" element={<UpdateCard />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
