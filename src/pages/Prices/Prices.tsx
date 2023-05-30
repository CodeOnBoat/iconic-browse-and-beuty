import React from "react";
import { prices } from "../../contents/prices";

export const Prices = () => {
  return;
  <div className="prices-container">
    <img src={} />
    <div>
      <h1>prices</h1>
      {prices.map((p) => {
        return (
          <div>
            <h1 className="main-title price">{p.title}</h1>
            {p.elements.map((e) => (
              <div>{e}</div>
            ))}
          </div>
        );
      })}
    </div>
  </div>;
};
