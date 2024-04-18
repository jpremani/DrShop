import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  function handleMobile() {
    if (mobile === false) {
      setMobile(true);
      document.querySelector(".login_signup").style.display = "block";
    } else {
      setMobile(false);
      document.querySelector(".login_signup").style.display = "none";
    }
  }
  return (
    <div className="Nav_Bar">
      <div className="logo">
        <div className="logo-name">AMRUTAM</div>
      </div>
      <div className="nav_bar_menu">
        <Link to="/">Home</Link>
        <Link to="/findDoctor">Find Doctors</Link>
        <Link to="/">About Us</Link>
      </div>
      <div className="login_signup">
        <button className="login">Login</button>
        <button className="sign-up">Sign-up</button>
      </div>
      <div className="mobile_button" onClick={handleMobile}>
        <span>
          {mobile ? (
            <i className="bi bi-x-circle"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
