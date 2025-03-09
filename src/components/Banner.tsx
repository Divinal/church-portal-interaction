
import React from 'react';

interface BannerProps {
  title?: string;
  description?: string;
  bannerImage?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  description, 
  bannerImage = '/images/banners/home-banner.jpg' 
}) => {
  return (
    <div className="relative">
      <div 
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
            {description && <p className="text-xl">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
