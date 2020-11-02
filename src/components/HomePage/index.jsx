import React from "react";
import CropsCard from "../CropsCard";
import HillsImage from "../../assets/hills.jpg";
import LightCrop from "../../assets/crops_light.jpg";
import { cropsList } from "../../assets/data";
import "./Home.css";
import { Container } from "@material-ui/core";
import Header from "../Header";
import SideBar from "../SideBar";

const HomePage = () => {
  return (
    <div className="Layout">
      <Header />

      <div className="Home">
        <div
          className="WelcomeSection"
          style={{ backgroundImage: `url(${LightCrop})`, objectFit: "contain" }}
        >
          <h1>Welcome to Urban Crop System</h1>
          <p> Here to ease your stress in agriculture</p>
        </div>

        <div className="IntroSection">
          <img src={HillsImage} alt="" />
          <h1>Were are here to improve your knowledge in agriculture</h1>
        </div>

        <Container>
          <div className="MainArea">
            <main>
              <h1>Available Crops</h1>
              <div className="CropsList">
                {cropsList.map((crop) => (
                  <CropsCard
                    cropId={crop.id}
                    image={crop.images[0]["url"]}
                    name={crop.name}
                    description={crop.description}
                  />
                ))}
              </div>
            </main>
            <div className="SideArea">
              <SideBar />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
