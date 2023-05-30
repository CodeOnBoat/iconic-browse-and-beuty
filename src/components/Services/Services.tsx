import React from "react";
import "./Services.css";
import { ComponentHeader } from "../ComponentHeader/ComponentHeader";
import ServicesObject from "../../contents/services";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <div className="services-container">
      <ComponentHeader title="Services" />
      <div className="services-carousel">
        {ServicesObject.map((s) => (
          <ServicesCard card={s} />
        ))}
      </div>
    </div>
  );
};
