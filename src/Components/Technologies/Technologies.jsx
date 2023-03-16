import React from "react";
import "./Technologies.css";
import TechSkills from "./TechSkills";

const Technologies = () => {
  return (
    <div className="Component">
      <div className="Technologies">
        {TechSkills.map((tech) => (
          <img key={tech.name} src={tech.logo} alt={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
