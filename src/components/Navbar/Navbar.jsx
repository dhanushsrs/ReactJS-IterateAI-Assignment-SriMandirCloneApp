import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.img_sm_logo_en_dark} alt="img_logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Puja")}
          className={menu === "Puja" ? "active" : ""}
        >
          Puja
        </li>
        <li
          onClick={() => setMenu("Panchang")}
          className={menu === "Panchang" ? "active" : ""}
        >
          Panchang
        </li>
        <li
          onClick={() => setMenu("Temples")}
          className={menu === "Temples" ? "active" : ""}
        >
          Temples
        </li>
        <li
          onClick={() => setMenu("Library")}
          className={menu === "Library" ? "active" : ""}
        >
          Library
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.default_profile} alt="profile_img" />
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Navbar;
