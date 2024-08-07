import React from 'react'
import india from "./images/india.jpg"
import london2 from "./images/london2.jpg"
import usa from "./images/usa.jpg"
import { useNavigate } from "react-router-dom"


const Destination = () => {

  const navigate = useNavigate();
  const handleCountryChange = (newCountry) => {
    navigate(`/country/${newCountry}`); // Redirect to the specific category page
  }

  return (
    <div>
      <hr/>
      <h1 className='heading-destin'>Destination</h1>
      <h4 className='sub-heading-destin'>Pick a country and start exploring!</h4>
      <hr/>
      <div className="destina">
        <div className="destina-part">
          <h3>India</h3>
          <img src={india} alt="" className='img-aboutme destin-img'/>
          <div className="destin-btn-cont">
            <button className='destin-btn' onClick={() => handleCountryChange("india")}>India</button>
          </div>
        </div>
        <div className="destina-part">
          <h3>London</h3>
          <img src={london2} alt="" className='img-aboutme destin-img'/>
          <div className="destin-btn-cont">
            <button className='destin-btn' onClick={() => handleCountryChange("london")}>London</button>
          </div>
        </div>
        <div className="destina-part">
          <h3>USA</h3>
          <img src={usa} alt="" className='img-aboutme destin-img'/>
          <div className="destin-btn-cont">
            <button className='destin-btn' onClick={() => handleCountryChange("usa")}>USA</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Destination
