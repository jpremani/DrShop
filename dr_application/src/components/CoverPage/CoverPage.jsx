import React from "react";
import "./CoverPage.css";
import drimage from "../../assets/Drimage.jpg";
const CoverPage = () => {
  return (
    <div className="cover_page">
      <div className="left-side">
        <div className="img-side">
          <img src={drimage} alt="DrImage" />
        </div>
        <div className="name_side">
          <div className="dr_name">
            Dr. Anurag Kashyap
            <span>
              <i className="bi bi-check-lg" style={{ color: "blue" }}></i>
            </span>
          </div>
          <div className="dr-ocp" style={{ color: "green" }}>
            Dentist
          </div>
          <div className="dr-review">
            <span>4.2</span>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
      <div className="mid-side">
        <div>
          <div>Followers</div>
          <div style={{ paddingLeft: "10px" }}>850</div>
        </div>
        <div>
          <div>Following</div>
          <div style={{ paddingLeft: "10px" }}>18k</div>
        </div>
        <div>
          <div>Posts</div>
          <div style={{ paddingLeft: "10px" }}>250</div>
        </div>
      </div>
      <div className="right-side">
        <button className="cover-button">Book an Appointment</button>
      </div>
    </div>
  );
};

export default CoverPage;
