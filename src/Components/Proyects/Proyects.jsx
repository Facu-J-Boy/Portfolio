import React from "react";
import "./Proyects.css";
import ProyectCard from "../ProyectCard/ProyectCard";
import allProyects from "./AllProyects";

const Proyects = () => {
  return (
    <div className="component-proyect">
      <div className="proyects">
        {allProyects.map((e) => {
          return <ProyectCard name={e.name} image={e.image} />;
        })}
      </div>
    </div>
  );
};

export default Proyects;
