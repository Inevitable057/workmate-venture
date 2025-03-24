
import React from 'react';
import { cn } from "@/lib/utils";
import { Award, Star } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  withAnimation?: boolean;
}

export function Logo({ 
  className, 
  size = 'md', 
  withText = true,
  withAnimation = true
}: LogoProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div 
        className={cn(
          "relative flex items-center justify-center rounded-full",
          withAnimation && "logo-float",
          sizeMap[size]
        )}
      >
        <div className="absolute inset-0 bg-gold-aqua-gradient rounded-full opacity-20"></div>
        <Award 
          className={cn(
            "text-primary z-10",
            withAnimation && "logo-pulse"
          )} 
          size={size === 'sm' ? 18 : size === 'md' ? 24 : 30} 
        />
        <Star 
          className={cn(
            "absolute text-accent z-10 opacity-75",
            withAnimation && "logo-spin"
          )} 
          size={size === 'sm' ? 20 : size === 'md' ? 28 : 36} 
        />
      </div>
      
      {withText && (
        <div className={cn("ml-2 font-display font-bold", textSizeMap[size])}>
          Uni<span className="text-accent">Talent</span>
        </div>
      )}
    </div>
  );
}
