/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Contact from "../Contact/Contact";
import "./NavBar.css";

const NavBar = () => {
  console.log(process.env);

  const scrollToProyect = () => {
    const titleElement = document.getElementById("proyect-title");
    if (titleElement) {
      const yOffset = -100; // adjust this value to set the scroll offset
      const y =
        titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    const titleElement = document.getElementById("aboutMe-title");
    if (titleElement) {
      const yOffset = -100; // adjust this value to set the scroll offset
      const y =
        titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTechnologies = () => {
    const titleElement = document.getElementById("Technologies-title");
    if (titleElement) {
      const yOffset = -100; // adjust this value to set the scroll offset
      const y =
        titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const modal = () => {
    Swal.fire({
      imageUrl: `${process.env.REACT_APP_PROFILE}`,
      imageAlt: "Facundo Boy",
      customClass: {
        image: "swal-img",
      },
      width: "800px",
      height: "800px",
      background: "none",
      showConfirmButton: false,
    });
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <img
              className="profileImage"
              src={process.env.REACT_APP_PROFILE}
              alt={"imagen"}
              onClick={() => modal()}
            />
          </div>
          <div className="dropdown">
            <button className="burger-menu">☰</button>
            <ul className="dropdown-menu">
              {/* <Link to={"/aboutme"} style={{ textDecoration: "none" }}> */}
              <li>
                <a href="#">SOBRE MI</a>
              </li>
              {/* </Link> */}
              {/* <Link to={"/technologies"} style={{ textDecoration: "none" }}> */}
              <li>
                <a href="#">TECNOLOGIAS</a>
              </li>
              {/* </Link> */}
              {/* <Link to={"/proyects"} style={{ textDecoration: "none" }}> */}
              <li>
                <a href="#">PROYECTOS</a>
              </li>
              {/* </Link> */}
            </ul>
          </div>
          <div className="buttonsArea">
            {/* <Link to={"/aboutme"} style={{ textDecoration: "none" }}> */}
            <button className="button" onClick={scrollToAboutMe}>
              SOBRE MI
            </button>
            {/* </Link> */}
            {/* <Link to={"/technologies"} style={{ textDecoration: "none" }}> */}
            <button className="button" onClick={scrollToTechnologies}>
              TECNOLOGIAS
            </button>
            {/* </Link> */}
            {/* <Link to={"/proyects"} style={{ textDecoration: "none" }}> */}
            <button className="button" onClick={scrollToProyect}>
              PROYECTOS
            </button>
            {/* </Link> */}
            {/* <button className="button">HOVER ME</button>
            <button className="button">HOVER ME</button> */}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default NavBar;
