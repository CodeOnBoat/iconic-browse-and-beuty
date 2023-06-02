import React from "react";
import "./FirstImage.css";
import Image from "../../images/landingPic.jpeg";

export const FirstImage = () => {
  return (
    <div className="first-image-container">
      <div className="first-image-box">
        <p className="first-image-box-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dicta alias sapiente quam aliquid voluptatses illo odio numquam animi
          a amet, earum fugit! Sed cupiditate culpa corrupti consectetur
          accusantium modi quo excepturi.
        </p>
        <a className="first-image-box-button" href="https://www.bokadirekt.se/places/iconic-brows-beauty-45783" target="_blank" >Boka Tid</a>
      </div>
    </div>
  );
};
