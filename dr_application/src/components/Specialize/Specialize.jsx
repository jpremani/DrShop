import React from "react";
import "./Specialize.css";
import WomenHealth from "../../assets/womenhealth.jpg";
import SkinCare from "../../assets/womenskin.jpg";
import Immunity from "../../assets/womenimmunity.png";
import Haircare from "../../assets/women-hair-care-icon.png";

const Specialize = () => {
  const Spec = [
    {
      image: WomenHealth,
      name: "Women's Health",
    },
    {
      image: SkinCare,
      name: "Skin Care",
    },
    {
      image: Immunity,
      name: "Immunity",
    },
    {
      image: Haircare,
      name: "Hair Care",
    },
  ];

  return (
    <div className="spec_container">
      <div className="spec-heading">
        <h5>I Specialize in</h5>
      </div>
      <div className="spec_image">
        {Spec.map((value) => (
          <div className="spec_section" key={value.name}>
            <div className="spec_section_image">
              <img src={value.image} alt={value.name} />{" "}
              {/* Render the image */}
            </div>
            <div className="spec_section_name">{value.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialize;
