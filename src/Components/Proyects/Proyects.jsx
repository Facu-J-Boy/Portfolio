import React from "react";
import "./Proyects.css";
import ProyectCard from "../ProyectCard/ProyectCard";
import allProyects from "./AllProyects";

const Proyects = () => {
  return (
    <>
      <h1 id="proyect-title">PROYECTOS</h1>
      <div className="component-proyect">
        <div className="all-proyects">
          {allProyects.map((e) => {
            return <ProyectCard key={e.name} name={e.name} image={e.image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Proyects;
