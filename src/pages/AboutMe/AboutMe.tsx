import React from "react";
import "./AboutMe.css";
import SampleImage from "../../images/descarga.jpeg";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={SampleImage} className="about-me-image" />
      <div>
        <h1 className="main-title">About me</h1>
        <p className="about-me-text">
          {" "}
          Om mig <br />
          <br />
          Välkommen till Iconic Brows & Beauty! Jag heter Ofelia, det är mig du
          får träffa när du kommer hit och det är jag som utför alla
          behandlingar.
          <br />
          <br />
          Efter avslutad utbildning på Plaza Di Laura Academy som är en en av
          Sveriges största skolor inom kosmetisk tatuering och skönhet samt
          Victoria Grepo Academy för hudvård har jag fått certifiering inom alla
          områden jag utför behandlingar på. Att ständigt uppdatera sig inom
          olika metoder i branschen är viktigt för mig och därför har jag alltid
          den senaste tekniken i alla behandlingar jag utför. <br />
          <br />
          Jag strävar alltid att göra dig som kund nöjd och bekväm under hela
          behandlingen och utför mitt jobb med hög noggrannhet och höga
          kvalitets produkter. <br />
          <br />
          Varmt välkomna!
        </p>
      </div>
    </div>
  );
};
