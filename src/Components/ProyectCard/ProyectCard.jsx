import React from "react";
import "./ProyectCard.css";

const ProyectCard = ({ name, images, url }) => {
  return (
    <div className="proyect-card">
      <h1>{name}</h1>
      <div className="slider-container">
        {images.map((el, index) => (
          <img key={index} className="slider-item" src={`${el}`} alt="imagen" />
        ))}
      </div>
      <a href={url}>
        <button>
          <span>Ver</span>
        </button>
      </a>
    </div>
  );
};

export default ProyectCard;
