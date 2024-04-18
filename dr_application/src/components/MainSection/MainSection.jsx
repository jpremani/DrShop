import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import "./MainSection.css";
import Specialize from "../Specialize/Specialize";
import Concerns from "../Concerns/Concerns";
import WorkExperience from "../WorkExperience/WorkExperience";
import Feature from "../Feature/Feature";
import Appoitment from "../Appoitment/Appoitment";
import CoverPage from "../CoverPage/CoverPage";

const MainSection = () => {
  return (
    <div className="MainSection_Page">
      <div>
        <CoverPage />
      </div>
      <div className="Main_Section">
        <div className="left-section">
          <AboutMe />
          <Specialize />
          <Concerns />
          <WorkExperience />
          <Feature />
        </div>
        <div className="right-section">
          <Appoitment />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
