
import { AnimateOnScroll } from "./ui/animations";
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <AnimateOnScroll animation="slide-up" className="lg:col-span-2">
            <div className="mb-4">
              <a href="/" className="text-2xl font-display font-bold text-primary">
                Uni<span className="text-accent">Talent</span>
              </a>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The premier platform connecting skilled freelancers with clients looking for exceptional talent. 
              Join our community today and transform the way you work.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={100}>
            <h3 className="text-lg font-semibold mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Find Freelancers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Payment Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Success Stories
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={200}>
            <h3 className="text-lg font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Find Work
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Create Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Skills Tests
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Freelancer Stories
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={300}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Blog & Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" /> Partnership Program
                </a>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UniTalent. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
