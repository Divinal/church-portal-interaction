
import { cn } from "@/lib/utils";

interface BannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  height?: string;
  className?: string;
}

const Banner = ({
  title,
  subtitle,
  imageSrc,
  height = "h-[60vh]",
  className,
}: BannerProps) => {
  return (
    <div
      className={cn(
        "banner", 
        height,
        className
      )}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="banner-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl text-center animate-fade-in delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
