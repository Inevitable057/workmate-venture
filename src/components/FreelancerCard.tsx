
import { cn } from "@/lib/utils";
import { AnimateOnScroll, BlurImage } from "./ui/animations";
import { Star, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FreelancerCardProps {
  name: string;
  title: string;
  rating: number;
  hourlyRate: number;
  imageUrl: string;
  skills: string[];
  className?: string;
  delay?: number;
  reviewCount?: number;
}

export function FreelancerCard({
  name,
  title,
  rating,
  hourlyRate,
  imageUrl,
  skills,
  className,
  delay = 0,
  reviewCount = Math.floor(Math.random() * 50) + 5, // Random number of reviews between 5-55
}: FreelancerCardProps) {
  const handleHire = () => {
    toast.success(`Contact request sent to ${name}`);
  };
  
  const handleRateReview = () => {
    toast.info(`Rate and review form for ${name} opened`);
  };

  return (
    <AnimateOnScroll animation="scale-in" delay={delay} className={cn("", className)}>
      <div className="glass-card h-full p-6 rounded-xl hover:shadow-medium transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex items-start mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <BlurImage
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-muted-foreground text-sm mb-2">{title}</p>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground ml-1">({reviewCount})</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm">
            <span className="text-muted-foreground">Hourly Rate:</span>{" "}
            <span className="font-semibold">${hourlyRate}/hr</span>
          </div>
          
          <div>
            <div className="text-sm text-muted-foreground mb-2">Skills:</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-3 flex space-x-2">
            <Button 
              className="flex-1" 
              onClick={handleHire}
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleRateReview}
              title="Rate and Review"
            >
              <MessageSquare size={16} />
            </Button>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
