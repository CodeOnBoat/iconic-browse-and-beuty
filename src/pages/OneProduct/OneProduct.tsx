import { useEffect, useRef } from "react";
import SampleImage from "../../images/descarga.jpeg";
import "./OneProduct.css";

type OneProductProps = {
  title: string;
  text: string;
  image?: string;
  subservices: { name: string; time: string; price: string }[];
};

export const OneProduct = ({
  title,
  text,
  image,
  subservices,
}: OneProductProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = text;
    }
  }, []);

  return (
    <div className="one-product-container">
      <img src={image} className="one-product-image" />
      <div>
        <h1 className="main-title">{title}</h1>
        <a
            className="btn-bookAppointment"
            href="https://www.bokadirekt.se/places/iconic-brows-beauty-45783"
            target="_blank"
          >
            Boka Tid
          </a>
        <div ref={contentRef} className="one-product-content-container"></div>
        {subservices.length > 0 && (
          <table className="prices-table">
            <th>Behandling</th>
            <th>Tid</th>
            <th>Priser</th>
            {subservices.map((s) => (
              <tr>
                <td>{s.name}</td>
                <td>{s.time}</td>
                <td>{s.price}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};
