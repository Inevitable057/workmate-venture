
import { useState, useEffect } from "react";
import { AnimateOnScroll } from "./ui/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <AnimateOnScroll animation="fade-in" className="flex items-center">
            <a href="/" className="text-2xl font-display font-bold text-primary">
              Uni<span className="text-accent">Talent</span>
            </a>
          </AnimateOnScroll>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Find Talent</a>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={200}>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Find Work</a>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={300}>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Why UniTalent</a>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={400}>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Log In
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in" delay={500}>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Sign Up
              </Button>
            </AnimateOnScroll>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Find Talent
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Find Work
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Why UniTalent
              </a>
              <Button variant="ghost" className="justify-start text-foreground/80 hover:text-foreground w-full">
                Log In
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
