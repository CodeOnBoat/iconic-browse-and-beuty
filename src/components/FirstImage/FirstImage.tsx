import React from "react";
import "./FirstImage.css";
import Image from "../../images/landingPic.webp";

export const FirstImage = () => {
  return (
    <div className="first-image-container">
      <div className="first-image-box">
        <h1>Välkommen till Iconic brows & beauty</h1>
        <p className="first-image-box-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dicta alias sapiente quam aliquid voluptatses illo odio numquam animi
          a amet, earum fugit! Sed cupiditate culpa corrupti consectetur
          accusantium modi quo excepturi.
        </p>
        <a
          className="first-image-box-button"
          href="https://www.bokadirekt.se/places/iconic-brows-beauty-45783"
          target="_blank"
        >
          Boka Behandling Direkt
        </a>
      </div>
    </div>
  );
};
