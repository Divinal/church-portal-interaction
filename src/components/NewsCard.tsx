
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  url: string;
  className?: string;
}

const NewsCard = ({
  title,
  excerpt,
  date,
  imageSrc,
  url,
  className,
}: NewsCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in",
        className
      )}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-serif font-bold mb-2 text-church-DEFAULT line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={url}
          className="inline-block text-church-DEFAULT hover:text-church-gold transition-colors font-medium"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
