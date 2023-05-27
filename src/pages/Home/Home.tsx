import React from "react";
import "./Home.css";
import { FirstImage } from "../../components/FirstImage/FirstImage";
import { Services } from "../../components/Services/Services";

export const Home = () => {
  return (
    <div>
      <FirstImage />
      <Services />
    </div>
  );
};
