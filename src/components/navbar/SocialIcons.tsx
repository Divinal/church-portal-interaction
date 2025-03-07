import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface SocialIconsProps {
  size?: number;
  className?: string;
}

const SocialIcons = ({ size = 18, className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <Facebook size={size} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <Twitter size={size} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <Instagram size={size} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
        <Youtube size={size} />
      </a>
    </div>
  );
};

export default SocialIcons;

