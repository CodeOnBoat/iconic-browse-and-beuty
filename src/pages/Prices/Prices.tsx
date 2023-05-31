import React from "react";
import { prices } from "../../contents/prices";
import './Prices.css';

export const Prices = () => {
  return (
    <div className="prices-container">
      <div>
        <h1>prices</h1>
        {prices.map((p) => {
          return (
            <div>
              <h1 className="main-title price">{p.title}</h1>
              {p.elements.map((e) => (
                <div className="price-item">{e}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  )
};
