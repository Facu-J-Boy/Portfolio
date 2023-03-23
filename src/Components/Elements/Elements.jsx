import React from "react";
import "./Elements.css";
import AboutMe from "../AboutMe/AboutMe";
import Technologies from "../Technologies/Technologies";
import Proyects from "../Proyects/Proyects";

const Elements = () => {
  return (
    <div className="elements">
      <AboutMe />
      <Technologies />
      <Proyects />
    </div>
  );
};

export default Elements;
