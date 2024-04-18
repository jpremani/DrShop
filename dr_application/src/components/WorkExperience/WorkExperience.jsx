import React from "react";
import college from "../../assets/college.png";
import "./WorkExperience.css";

const WorkExperience = () => {
  const college_name = [
    {
      image: college,
      college: "Midtown Medical Clinic",
      occupation: "Senior Doctor",
      date: "2016-PRESENT",
    },
    {
      image: college,
      college: "Midtown Medical Clinic",
      occupation: "Senior Doctor",
      date: "2010-2015",
    },
  ];
  return (
    <div className="Work_container">
      <div className="Work_header">
        <h5>My Work Experience</h5>
      </div>
      <div className="Work_main">
        <p>I HAVE BEEN PRACTICE FOR: 7+ YEARS</p>
        <div className="Work_Line"></div>
        {college_name.map((value, index) => (
          <div key={index} className="college_info">
            <img src={value.image} alt="college" />
            <div className="college_value">
              <div>{value.college}</div>
              <div className="college_occupation">{value.occupation}</div>
            </div>
            <div className="coll_date">
              <p>{value.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Wok_footer"></div>
    </div>
  );
};

export default WorkExperience;
