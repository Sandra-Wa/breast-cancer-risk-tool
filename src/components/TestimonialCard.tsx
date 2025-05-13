
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
}

const TestimonialCard = ({ quote, name, title, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="afya-card h-full flex flex-col">
      <div className="mb-4 text-afya-600">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="opacity-80"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-3.128.824-1.2 1.87-2.314 3.137-3.346l-1.34-1.51C9.165 6.09 7.668 7.2 6.5 8.455 5.33 9.712 4.5 11.108 4 12.645c-.323.998-.42 1.965-.287 2.9.133.934.513 1.653 1.14 2.157.627.504 1.355.755 2.185.755.55 0 1.057-.114 1.52-.344.464-.23.818-.544 1.06-.944.243-.4.364-.846.364-1.35 0-.398-.1-.764-.302-1.094-.202-.33-.486-.6-.853-.806.437-.32.774-.723 1.01-1.21.235-.486.353-.998.353-1.535zm9.308 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.55-.124-1.07-.13-1.54-.022-.16-.94.077-1.91.904-3.11.824-1.2 1.87-2.314 3.137-3.346l-1.333-1.51C19.328 6.09 17.83 7.2 16.663 8.455c-1.168 1.257-2 2.653-2.496 4.19-.323.998-.42 1.965-.287 2.9.133.934.513 1.653 1.14 2.157.627.504 1.356.755 2.185.755.55 0 1.057-.114 1.52-.344.464-.23.818-.544 1.06-.944.243-.4.364-.846.364-1.35 0-.398-.1-.764-.3-1.094-.202-.33-.486-.6-.853-.806.437-.32.774-.723 1.01-1.21.235-.486.353-.998.353-1.535z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        {imageUrl && (
          <div className="flex-shrink-0 mr-3">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
