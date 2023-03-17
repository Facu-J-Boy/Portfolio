/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import "./NavBar.css";

const NavBar = () => {
  console.log(process.env);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <img
              className="profileImage"
              src={process.env.REACT_APP_PROFILE}
              alt={"imagen"}
            />
          </div>
          <div className="dropdown">
            <button className="burger-menu">☰</button>
            <ul className="dropdown-menu">
              <Link to={"/aboutme"} style={{ textDecoration: "none" }}>
                <li>
                  <a href="#">ABOUT ME</a>
                </li>
              </Link>
              <Link to={"/technologies"} style={{ textDecoration: "none" }}>
                <li>
                  <a href="#">TECHNOLOGIES</a>
                </li>
              </Link>
              <li>
                <a href="#">PROYECTS</a>
              </li>
            </ul>
          </div>
          <div className="buttonsArea">
            <Link to={"/aboutme"} style={{ textDecoration: "none" }}>
              <button className="button">ABOUT ME</button>
            </Link>
            <Link to={"/technologies"} style={{ textDecoration: "none" }}>
              <button className="button">TECHNOLOGIES</button>
            </Link>
            <button className="button">PROYECTS</button>
            <button className="button">HOVER ME</button>
            <button className="button">HOVER ME</button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default NavBar;
