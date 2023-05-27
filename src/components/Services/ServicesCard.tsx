import React from "react";

type ServicesCardProps = {
  card: { title: string; image: string };
};

export const ServicesCard = ({ card }: ServicesCardProps) => {
  return;
  <div className="services-card-container">
    <img src={card.image} />
    <div className="services-card-title-container">{card.title}</div>
  </div>;
};
