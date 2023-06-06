import { useNavigate } from "react-router-dom";
import "./Services.css";

type ServicesCardProps = {
  card: { name: string; image: string; id: string };
};

export const ServicesCard = ({ card }: ServicesCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="services-card-container"
      style={{ backgroundImage: `url(${card.image})` }}
      onClick={() => navigate(`/services/${card.id}`)}
    >
      <div className="services-card-title-container">{card.name}</div>
    </div>
  );
};
