import React from "react";
import "./ComponentHeader.css";

type ComponentHeaderProps = {
  title: string;
  direction: string;
};

export const ComponentHeader = ({ title, direction }: ComponentHeaderProps) => {
  return (
    <div className="component-header-container">
      <div
        className={`standard-component-header-line ${
          direction === "right" ? "right" : "left"
        }`}
      ></div>
      <div
        className={`standard-component-header ${
          direction === "right" ? "right" : "left"
        }`}
      >
        <h1>{title}</h1>
      </div>
      <div
        className={`standard-component-header-line ${
          direction === "right" ? "right" : "left"
        }`}
      ></div>
    </div>
  );
};
