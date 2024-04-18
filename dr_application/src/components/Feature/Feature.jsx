import React from "react";
import Drimage from "../../assets/Drimage.jpg";
import fiveStar from "../../assets/starfive.png";
import "./Feature.css";

const Feature = () => {
  const customer = [
    {
      img: Drimage,
      name: "Alicent Highway",
      dept: "Consultant for Skin Care",
      date: "20-Jan-2024", // Corrected date format
      star: fiveStar,
      review:
        "Might be early comfortable to confirm but yes i can see notification difference in my hair will write again after using it for longer periods",
    },
    {
      img: Drimage,
      name: "Alicent Highway",
      dept: "Consultant for Skin Care",
      date: "20-Jan-2024", // Corrected date format
      star: fiveStar,
      review:
        "Might be early comfortable to confirm but yes i can see notification difference in my hair will write again after using it for longer periods",
    },
  ];
  return (
    <div className="Feature_Container">
      <div className="feature_header">
        <h5>Featured Review (102)</h5>
      </div>
      <div className="Feature">
        {customer.map(
          (
            value,
            index // Added 'index' parameter to map function
          ) => (
            <div key={index} className="Feature_card">
              {" "}
              {/* Added key attribute */}
              <div className="Feature_card_header">
                <img src={value.img} alt="image" />
                <div className="Feature_card_name">
                  <h5>{value.name}</h5>
                  <p>{value.dept}</p>
                </div>
                <div className="Feature_card_date">{value.date}</div>
                <div></div>
              </div>
              <div className="Feature_card_footer">
                {/* <div>{value.star}</div> */}
                <img src={value.star} alt="star" />

                <div Feature_card_review>{value.review}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Feature;
