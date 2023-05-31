import SampleImage from "../../images/descarga.jpeg";
import './OneProduct.css';


type OneProductProps = {
  title: string;
  text: string;
};

export const OneProduct = ({ title, text }: OneProductProps) => {
  return (
    <div className="one-product-container">
      <img src={SampleImage} className="one-product-image" />
      <div>
        <h1 className="main-title">{title}</h1>
        <p className="one-product-text">{text}</p>
      </div>
    </div>
  );
};
