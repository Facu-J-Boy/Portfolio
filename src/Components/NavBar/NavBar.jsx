import React from "react";
import "./NavBar.css";

const NavBar = () => {
  console.log(process.env);
  return (
    // <div className="navBody">
    //   <img
    //     className="profileImage"
    //     src={process.env.REACT_APP_PROFILE}
    //     alt={"imagen"}
    //   />
    //   <div></div>
    //   <div></div>
    //   <div></div>
    // </div>
    <div className="container">
      <div className="card">
        <div className="header">
          <img
            className="profileImage"
            src={process.env.REACT_APP_PROFILE}
            alt={"imagen"}
          />
        </div>
        <div className="body">
          {/* <ul>
            <li>
              <i className="fas fa-home icon"></i> Home
            </li>
            <li>
              <i className="fas fa-underline icon"></i> Tipography
            </li>
            <li>
              <i className="fas fa-boxes icon"></i> Widgets
            </li>
            <li>
              <i className="fas fa-table icon"></i> Tables
            </li>
            <li>
              <i className="fab fa-wpforms icon"></i> Forms
              <ul>
                <li>
                  <i className="fas fa-pencil-alt icon"></i> First form
                </li>
                <li>
                  <i className="fas fa-paper-plane icon"></i> Second form
                </li>
              </ul>
            </li>
            <li>
              <i className="fas fa-chart-pie icon"></i> Charts
            </li>
          </ul> */}
          <button className="button">ABOUT ME</button>
          <button className="button">TECNOLOGIES</button>
          <button className="button">PROYECTS</button>
          <button className="button">HOVER ME</button>
          <button className="button">HOVER ME</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
