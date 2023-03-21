import React from "react";
import "./ProyectCard.css";

const ProyectCard = ({ name, image }) => {
  return (
    <div className="proyect-card">
      <h1>{name}</h1>
      <img src={`${image}`} alt="imagen" />
      <button>
        <span>Ver</span>
      </button>
    </div>
  );
};

export default ProyectCard;
