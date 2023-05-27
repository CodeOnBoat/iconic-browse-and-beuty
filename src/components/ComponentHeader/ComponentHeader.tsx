import React from "react";
import "./ComponentHeader.css";

type ComponentHeaderProps = {
  title: string;
};

export const ComponentHeader = ({ title }: ComponentHeaderProps) => {
  return (
    <div>
      <div className="standard-component-header-line"></div>
      <div className="standard-component-header">
        <h1>{title}</h1>
      </div>
      <div className="standard-component-header-line"></div>
    </div>
  );
};
