import React from 'react'
import Layout from '../Layout'
import './CropPage.css'

const CropPage = () => {
  return (
    <Layout>
    <div className="CropPage">
      <h1 className="CropHeading">
        Casava
      </h1>
      <p className="CropDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto soluta ut iste beatae dicta dolore. Minus mollitia qui dolore error, velit, adipisci ut iure suscipit esse totam, iusto molestiae placeat!
      </p>
      <div className="CropInfoSection">

      <div className="CropSeasons">
        <h2>Seasons</h2>
        <p>This is should be planted in thefollowing seasons for best results:</p>
        <div className="Seasonperiod">
        <p>21st September to 10th October</p>
          <p>21st September to 10th October</p>
        </div>
      </div>
      <div className="CropDiseases">
      <h2>Diseases</h2>
        <p>This can be affeted by the following diseases:</p>
        <div className="DiseaseList">
          <ul>
            <li>
              name 1
            </li>
            <li>
              name 1
            </li>
            <li>
              name 1
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>

    <div className="PlantingSteps">
      <h1>Steps for planting</h1>
      <div className="StepsList">
        <p>
        1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati ab omnis aliquid earum iusto, eos suscipit nesciunt architecto ut eius dignissimos, exercitationem ad dicta molestiae rem voluptatem nihil voluptatum.
       </p>
        <p>
        2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa perferendis nesciunt aperiam dolorem blanditiis voluptates cum expedita, optio tenetur illum molestiae amet nostrum suscipit laborum dolore impedit officia consequatur numquam?
        </p>
      </div>
    </div>
    </Layout>
  )
}

export default CropPage
