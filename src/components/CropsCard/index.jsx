import React from "react";
import { useHistory } from "react-router-dom";
import "./CropsCard.css";

const CropsCard = ({ cropId, image, name, description }) => {
  const history = useHistory();
  const goToCropPage = () => {
    history.push(`/crops?crop=${cropId}`);
  };
  return (
    <div className="CropsCard" onClick={goToCropPage}>
      <img src={image} alt="" />
      <div className="CardInfo">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CropsCard;
