import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform w-full lg:w-[20vw] m-4">
      <div className="text-yellow-400 mb-4 text-5xl">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
