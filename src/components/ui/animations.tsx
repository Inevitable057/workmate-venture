
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "scale-in";
  delay?: number;
  threshold?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  className,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
};

export function FadeIn({
  children,
  duration = 500,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <div
      className={cn("opacity-0", className)}
      style={{
        animation: `fadeIn ${duration}ms ease-out ${delay}ms forwards`,
      }}
    >
      {children}
    </div>
  );
}

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

// Add the animation to the document if it doesn't exist
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = fadeIn;
  document.head.appendChild(style);
}

type StaggerChildrenProps = {
  children: React.ReactNode[];
  staggerAmount?: number;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "scale-in";
  className?: string;
  childClassName?: string;
};

export function StaggerChildren({
  children,
  staggerAmount = 100,
  animation = "fade-in",
  className,
  childClassName,
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={cn(`animate-${animation}`, childClassName)}
          style={{
            animationDelay: `${i * staggerAmount}ms`,
            animationFillMode: "forwards",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-all duration-500 ease-out",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
