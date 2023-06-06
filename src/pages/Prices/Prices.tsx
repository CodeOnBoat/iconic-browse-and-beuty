import React from "react";
import { prices } from "../../contents/prices";
import "./Prices.css";

export const Prices = () => {
  return (
    <div className="prices-container">
      <div>
        <h1>prices</h1>
        {prices.map((p) => {
          return (
            <div>
              <h1 className="main-title price">{p.name}</h1>
              <table className="prices-table">
                <th>name</th>
                <th>time</th>
                <th>price</th>
                {p.elements.map((e) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.time}</td>
                    <td>{e.price}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
