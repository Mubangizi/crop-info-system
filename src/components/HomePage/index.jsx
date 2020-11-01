import React from "react";
import CropsCard from "../CropsCard";
import Layout from "../Layout";
import Logo from "../../assets/c-logo.jpg";
import {cropsList} from "../../assets/data";
import "./Home.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="Home">
        <div className="CropsList">
          {
            cropsList.map((crop)=>(
              <CropsCard cropId={crop.id} image={Logo} name={crop.name} description={crop.description}/>
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
