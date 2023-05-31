import React from "react";
import "./Services.css";
import { ComponentHeader } from "../ComponentHeader/ComponentHeader";
import { ServicesCard } from "./ServicesCard";
import {services} from '../../contents/services';

export const Services = () => {
  return (
    <div className="services-container">
      <ComponentHeader title="Services" />
      <div className="services-carousel">
        {services.map((s) => (
          <ServicesCard card={s} />
        ))}
      </div>
    </div>
  );
};
