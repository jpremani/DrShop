import React from "react";
import "./Appoitment.css";
import { useState } from "react";

const Appoitment = () => {
  const AppoitmentMode = [
    {
      type: "In-Clinic",
      time: "45-Minut",
    },
    {
      type: "Video",
      time: "45-Minut",
    },
    {
      type: "Chat",
      time: "15-Minut",
    },
  ];
  const MorningTime = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
  ];

  const EveningTime = ["04:00 PM", "04.15PM", "04:30 PM", "04:45PM", "05:15PM"];

  return (
    <div className="Appoitment">
      <div className="Appoitment_fee">
        <h5>Appoitment Fee</h5>
        <span>
          <i class="bi bi-currency-rupee"></i> 699.00
        </span>
      </div>
      <div className="Appoitment_mode">
        <div className="Appoitment_mode_head">
          <h5>Select your mode of session</h5>
          <div></div>
        </div>

        <div className="Appoitment_type">
          {AppoitmentMode.map((value, index) => (
            <div key={index} className="Appoint_Value">
              <span>{value.type}</span>
              <p>{value.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Date_slot">
        <div className="Date_slot_heading">
          <h5>Pick A Time Slot</h5>
          <div></div>
          <i class="bi bi-calendar-check-fill"></i>
        </div>
        <div className="Dte_slot_timing">
          <div>
            <span>Mon,10-oct</span>
            <span>10 Slot</span>
          </div>
          <div>
            <span>Mon,11-oct</span>
            <span>2 Slot</span>
          </div>
          <div>
            <span>Mon,12-oct</span>
            <span>10 Slot</span>
          </div>
        </div>
      </div>
      <div className="Morning_Time_slot">
        <h5>Morning Time</h5>
        <div className="Time_Slot">
          {MorningTime.map((value, index) => (
            <span key={index} className="Morning_Time_confirm">
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className="Evening_Time_slot">
        <h5>Evening Time</h5>
        <div className="Evening_Slot">
          {EveningTime.map((value, index) => (
            <span key={index} className="Evening_Time_confirm">
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className="button_container">
        <button>Make A Appoitment</button>
      </div>
    </div>
  );
};

export default Appoitment;
