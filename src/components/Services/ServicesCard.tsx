import './Services.css';

type ServicesCardProps = {
  card: { name: string; image: string };
};

export const ServicesCard = ({ card }: ServicesCardProps) => {
  return (
    <div className="services-card-container">
      <div className="services-card-title-container">{card.name}</div>
    </div>
  );
};
