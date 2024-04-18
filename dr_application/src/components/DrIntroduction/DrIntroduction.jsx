import React from "react";
import "./DrIntroduction.css";
import DrDetails from "../DrDetails/DrDetails";

const DrIntroduction = () => {
  return (
    <div className="DrIntroduction">
      <div className="DrIntroduction_header">
        <h2>Find Experst Doctors For An In-Clinic Session Here</h2>
        <div className="input-group">
          <div className="input-select">
            <select>
              <option>Select Location</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Nasik</option>
            </select>
          </div>
          <div className="input-search">
            <input
              type="text"
              placeholder="eg. Doctor specialisation, clinic name"
            />
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="dr_dropdown">
        <select>
          <option>Expertise</option>
          <option>Skin</option>
          <option>Dental</option>
          <option>Hair</option>
          <option>Heart</option>
        </select>
        <select>
          <option>Gender</option>
          <option>Mail</option>
          <option>Female</option>
        </select>
        <select>
          <option>Fees</option>
          <option>1000</option>
          <option>2000</option>
          <option>3000</option>
          <option>4000</option>
        </select>
        <select>
          <option>Language</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Telegu</option>
          <option>Punjabi</option>
        </select>
      </div>
      <hr />

      <DrDetails />
    </div>
  );
};

export default DrIntroduction;
