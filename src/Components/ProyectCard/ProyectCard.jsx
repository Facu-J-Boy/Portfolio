import React from "react";
import "./ProyectCard.css";

const ProyectCard = ({ name, images }) => {
  return (
    <div className="proyect-card">
      <h1>{name}</h1>
      {/* <img src={`${image}`} alt="imagen" /> */}
      <div className="slider-container">
        {images.map((el, index) => (
          <img key={index} className="slider-item" src={`${el}`} alt="imagen" />
        ))}
      </div>
      <button>
        <span>Ver</span>
      </button>
    </div>
  );
};

export default ProyectCard;
