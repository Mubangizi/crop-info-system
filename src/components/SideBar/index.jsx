import React from "react";
import "./SideBar.css";
import { cropsList } from "../../assets/data";
import FarmImage from "../../assets/land.jpg";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();
  const goToCropsPage = (id) => {
    console.log(id);
    history.push(`/crops?crop=${id}`);
  };

  return (
    <div className="SideBar">
      <div className="ServicesCard">
        <h3>Urban Crop Farming</h3>
        <p>Achive a better farming experience </p>
        <img src={FarmImage} alt="" />
      </div>

      <h3>Trending Crops</h3>
      {cropsList.map((crop) => (
        <div
          className="SmallCropCard"
          onClick={(id) => {
            goToCropsPage(crop.id);
          }}
        >
          <img src={crop.images[0]["url"]} alt="" />
          <div className="SmallCardInfo">
            <h4>{crop.name}</h4>
            <p>{crop.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
