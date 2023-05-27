import React from "react";
import "./Services.css";
import { ComponentHeader } from "../ComponentHeader/ComponentHeader";

export const Services = () => {
  return (
    <div className="services-container">
      <ComponentHeader title="Services" />
      <div className="services-carousel"></div>
    </div>
  );
};
