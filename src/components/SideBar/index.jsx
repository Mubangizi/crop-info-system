import React from 'react'
import './SideBar.css'
import {cropsList} from "../../assets/data";
import Logo from "../../assets/c-logo.jpg";
import { useHistory } from 'react-router-dom';


const SideBar = () => {

  const history = useHistory()
const goToCropsPage = (id)=>{
  console.log(id)
    history.push(`/crops?crop=${id}`)
}

  return (
    <div className="SideBar">
      <h3>Trending Crops</h3>
      {
        cropsList.map((crop)=>(
          <div className="SmallCropCard" onClick={(id)=>{goToCropsPage(crop.id)}}>
            <img src={Logo} alt=""/>
            <div className="SmallCardInfo">

              <h4>{crop.name}</h4>
              <p>{crop.description}</p>
            </div>

          </div>
        ))
      }
      
    </div>
  )
}

export default SideBar
