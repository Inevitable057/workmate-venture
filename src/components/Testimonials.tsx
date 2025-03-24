
import { useState, useEffect, useCallback } from "react";
import { AnimateOnScroll } from "./ui/animations";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Working with freelancers on this platform has transformed our business. We've found incredible talent that we wouldn't have discovered otherwise.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechGrowth Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote: "The quality of work I've received has consistently exceeded my expectations. The platform makes it easy to find the perfect match for any project.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "Innovate Labs",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote: "As a freelancer, this platform has connected me with clients I never would have found on my own. The payment protection gives me peace of mind for every project.",
    author: "Priya Sharma",
    position: "UX Designer",
    company: "Freelance Professional",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slide-up" className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What people are saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from clients and freelancers who have experienced the power of our platform
            and transformed the way they work.
          </p>
        </AnimateOnScroll>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 md:p-10 rounded-2xl relative z-10">
                    <Quote className="w-12 h-12 text-primary/30 absolute top-6 right-6 rotate-180" />
                    
                    <div className="mb-8">
                      <p className="text-lg md:text-xl text-foreground/90 italic relative z-20">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatarUrl} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="mr-2 h-9 w-9 rounded-full border-primary/20 hover:bg-primary/5"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2 mx-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === activeIndex
                      ? "bg-primary w-6"
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="ml-2 h-9 w-9 rounded-full border-primary/20 hover:bg-primary/5"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
