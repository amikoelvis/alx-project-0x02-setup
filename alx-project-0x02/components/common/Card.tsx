import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
