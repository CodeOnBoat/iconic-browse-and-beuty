import React from "react";
import "./Home.css";
import { FirstImage } from "../../components/FirstImage/FirstImage";
import { Services } from "../../components/Services/Services";
import { Reviews } from "../../components/Reviews/Reviews";

interface HomeProps {
  servicesRef: React.RefObject<HTMLDivElement>;
}

export const Home = ({ servicesRef }: HomeProps) => {
  return (
    <div>
      <FirstImage />
      <div ref={servicesRef}></div>
      <Services />
      <Reviews />
    </div>
  );
};
