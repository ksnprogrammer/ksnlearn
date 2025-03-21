// src/components/FeaturedContentCard.tsx
import React from 'react';

interface FeaturedContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FeaturedContentCard: React.FC<FeaturedContentCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h4 className="text-lg font-semibold mt-2 text-white">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeaturedContentCard;
