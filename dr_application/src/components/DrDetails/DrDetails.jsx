import React, { useState } from "react";
import "./DrDetails.css";
import DrImage from "../../assets/Drimage.jpg";
const DrDetails = () => {
  const drDetails = [
    {
      img: DrImage,
      name: "Dr. Prena Narang",
      spec: "Male-female Infertility",
      language: " English, Hindi, Marathi",
      rating: "4.5",
      exp: "7 year Exp.",
      price: "800",
      free: "free",
    },
    {
      img: DrImage,
      name: "Dr. Prena Narang",
      spec: "Male-female Infertility",
      language: " English, Hindi, Marathi",
      rating: "4.5",
      exp: "7 year Exp.",
      price: "800",
      free: "free",
    },
    {
      img: DrImage,
      name: "Dr. Prena Narang",
      spec: "Male-female Infertility",
      exp: "7 year Exp.",
      language: " English, Hindi, Marathi",
      rating: "4.5",
      price: "800",
      free: "free",
    },
  ];
  const [modalValue, setModalValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModel = (value) => {
    setModalValue(value);
    setIsModalOpen(true);
    document.querySelector(".DrDetails_detail").computedStyleMap.display =
      "none";
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.querySelector(".DrDetails_detail").computedStyleMap.display =
      "block";
  };
  console.log(modalValue);

  return (
    <div className="DrDetails">
      {drDetails.map((value, index) => (
        <div key={index} className="DrDetails_detail">
          <div className="Dr_image">
            <img src={value.img} alt="drimg" />
            <div>
              {value.rating}
              <span>
                <i class="bi bi-star-fill"></i>
              </span>
            </div>
          </div>
          <div className="dr_name">
            <h5>{value.name}</h5>
            <p>
              <i className="bi bi-gender-ambiguous"></i>
              {value.spec}
            </p>
            <p>
              <i className="bi bi-mortarboard"></i>
              {value.exp}
            </p>
            <p>
              <i className="bi bi-chat-left-dots"></i>Speaks: {value.language}
            </p>
          </div>
          <div className="dr_consult">
            <div className="dr_consult_section">
              <span>Video Consultation</span>
              <span>
                <i class="bi bi-currency-rupee"></i>
                {value.price}
              </span>
            </div>
            <div className="dr_consult_section">
              <span>Chat Consultation</span>
              <span>{value.free}</span>
            </div>
          </div>
          <div className="DrDetail_button">
            <button onClick={() => handleModel(value)}>View Profile</button>
            <button>Book a consultation</button>
          </div>
        </div>
      ))}
      {isModalOpen && modalValue ? (
        <div className="model">
          <div className="model_container">
            <div className="modal_header">
              <h1>{modalValue.name}</h1>
              <button onClick={handleCloseModal}>
                <i class="bi bi-x-circle"></i>
              </button>
            </div>
            <div className="modal_value">
              <img src={modalValue.img} alt="" />
              <p>{modalValue.spec}</p>
              <p>{modalValue.exp}</p>
              <p>{modalValue.language}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DrDetails;
