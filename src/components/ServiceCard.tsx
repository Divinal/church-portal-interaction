
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  url: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  url,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      to={url}
      className={cn(
        "block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-t-4 border-[#1a365d] animate-fade-in",
        className
      )}
    >
      <div className="text-[#1a365d] mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold mb-2 text-[#1a365d]">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
