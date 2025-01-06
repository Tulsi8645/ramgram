import React from "react";
import { AboutCard as AboutCardType } from "../../types/about";

interface IconProps {
  className?: string;
}

const AboutCard: React.FC<AboutCardType & { icon: React.FC<IconProps> }> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-blue-700" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutCard;
