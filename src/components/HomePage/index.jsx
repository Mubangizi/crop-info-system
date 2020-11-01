import React from "react";
import CropsCard from "../CropsCard";
import Layout from "../Layout";
import Logo from "../../assets/c-logo.jpg";
import "./Home.css";
const HomePage = () => {
  return (
    <Layout>
      <div className="Home">
        <div className="CropsList">
          <CropsCard image={Logo} name="casava" description="yellowish when fresh and brown"/>
          <CropsCard image={Logo} name="tomatos" />
          <CropsCard image={Logo} name="mellons" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
