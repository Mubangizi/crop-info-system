import React from "react";
import Layout from "../Layout";
import { cropsList } from "../../assets/data";
import "./CropPage.css";

const CropPage = ({ location }) => {
  const query = new URLSearchParams(location.search);
  const cropId = parseInt(query.get("crop"));
  console.log(cropId);
  return (
    <Layout>
      {cropsList.map(
        (crop) =>
          cropId === crop.id && (
            <div className="CropPage">
              <h1 className="CropHeading">{crop.name}</h1>
              <p className="CropDescription">{crop.details}</p>

              <h1>Images</h1>
              <div className="CropImagesSection">
                {
                  crop.images.map((image)=>(
                    
                    <img src={image.url} alt={crop.name}/>
                  ))
                }
              </div>

              <div className="CropInfoSection">
                <div className="CropSeasons">
                  <h2>Seasons</h2>
                  <p>
                    This is should be planted in thefollowing seasons for best
                    results:
                  </p>
                  <div className="SeasonPeriod">
                    {crop.seasons.map((season) => (
                      <p>{season.time}</p>
                    ))}
                  </div>
                </div>
                <div className="CropDiseases">
                  <h2>Diseases</h2>
                  <p>This can be affeted by the following diseases:</p>
                  <div className="DiseaseList">
                    <ul>
                      {crop.diseases.map((disease) => (
                        <li>{disease.name} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="PlantingSteps">
                <h1>Steps for planting</h1>
                <div className="StepsList">
                  {crop.steps.map((step) => (
                    <p>{step.step}</p>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </Layout>
  );
};

export default CropPage;
