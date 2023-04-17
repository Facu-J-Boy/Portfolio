/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Swal from "sweetalert2";
import Contact from "../Contact/Contact";
import "./NavBar.css";

const NavBar = () => {
  const scrollToProyect = () => {
    const titleElement = document.getElementById("proyect-title");
    if (titleElement) {
      const yOffset = -100;
      const y =
        titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    const titleElement = document.getElementById("aboutMe-title");
    if (titleElement) {
      const yOffset = -100;
      const y =
        titleElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTechnologies = () => {
    const titleElement = document.getElementById("Technologies-title");
    if (titleElement) {
      const yOffset = -100;
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
        objectFit: "contain",
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
              <li>
                <a href="#" onClick={scrollToAboutMe}>
                  SOBRE MI
                </a>
              </li>
              <li>
                <a href="#" onClick={scrollToTechnologies}>
                  TECNOLOGIAS
                </a>
              </li>
              <li>
                <a href="#" onClick={scrollToProyect}>
                  PROYECTOS
                </a>
              </li>
            </ul>
          </div>
          <div className="buttonsArea">
            <button className="button" onClick={scrollToAboutMe}>
              SOBRE MI
            </button>
            <button className="button" onClick={scrollToTechnologies}>
              TECNOLOGIAS
            </button>
            <button className="button" onClick={scrollToProyect}>
              PROYECTOS
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default NavBar;
