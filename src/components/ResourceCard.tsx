
import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  category: string;
}

const ResourceCard = ({ title, description, imageUrl, link, category }: ResourceCardProps) => {
  return (
    <div className="afya-card h-full flex flex-col">
      {imageUrl && (
        <div className="mb-4 rounded-md overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <div className="flex-grow">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-afya-100 text-afya-700 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-afya-700 font-medium hover:text-afya-800 flex items-center mt-auto"
      >
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  );
};

export default ResourceCard;
