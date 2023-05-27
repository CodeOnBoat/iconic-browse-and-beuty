import React from "react";
import "./FirstImage.css";
import Image from "../../images/landingPic.webp";

export const FirstImage = () => {
  return (
    <div className="first-image-container">
      <img src={Image} className="first-image-image" />
      <div className="first-image-box">
        <p className="first-image-box-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dicta alias sapiente quam aliquid voluptatses illo odio numquam animi
          a amet, earum fugit! Sed cupiditate culpa corrupti consectetur
          accusantium modi quo excepturi.
        </p>
        <button className="first-image-box-button">Make an appointment</button>
      </div>
    </div>
  );
};
