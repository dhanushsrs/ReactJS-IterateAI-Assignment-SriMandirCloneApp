import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div>
          <p> WORLD'S LARGEST APP FOR HINDU DEVOTEES</p>
          <h1>
            Pray daily with <span> Sri Mandir </span> <br />
            One App for all your Devoties
          </h1>
        </div>

        <div className="playstore-appstore-container">
          <img src={assets.img_playstore_logo} alt="play-store" />
          <img src={assets.img_appstore_logo} alt="app-store" />
        </div>
      </div>

      <div className="header-image-content">
        <img
          src={assets.img_hero_artwork_en}
          alt="banner_image"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Header;
