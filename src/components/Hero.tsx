
import { Button } from "@/components/ui/button";
import { AnimateOnScroll, StaggerChildren } from "./ui/animations";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  const benefits = [
    "Access to top global talent",
    "Secure payment protection",
    "Quality work, guaranteed",
    "24/7 support",
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[100%] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateOnScroll animation="slide-up">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Transforming how work gets done
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Find the perfect <span className="text-primary">freelance</span> services for your business
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Connect with talented professionals from around the world. Quality work, delivered on time, every time.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                  Find Talent <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  I'm a Freelancer
                </Button>
              </div>
            </AnimateOnScroll>

            <StaggerChildren
              staggerAmount={100}
              animation="fade-in"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              childClassName="opacity-0"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>

          <AnimateOnScroll animation="fade-in" delay={400} className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-medium">
              <div className="glass-card absolute top-10 left-10 p-4 rounded-xl max-w-[220px] animate-pulse">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                  <div>
                    <div className="h-4 w-24 bg-foreground/10 rounded"></div>
                    <div className="h-3 w-16 bg-foreground/5 rounded mt-1"></div>
                  </div>
                </div>
                <div className="h-3 w-full bg-foreground/5 rounded mb-1"></div>
                <div className="h-3 w-5/6 bg-foreground/5 rounded mb-1"></div>
                <div className="h-3 w-4/6 bg-foreground/5 rounded"></div>
              </div>

              <div className="glass-card absolute bottom-10 right-10 p-4 rounded-xl max-w-[220px] animate-pulse" style={{ animationDelay: "1s" }}>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 mr-3"></div>
                  <div>
                    <div className="h-4 w-24 bg-foreground/10 rounded"></div>
                    <div className="h-3 w-16 bg-foreground/5 rounded mt-1"></div>
                  </div>
                </div>
                <div className="h-3 w-full bg-foreground/5 rounded mb-1"></div>
                <div className="h-3 w-5/6 bg-foreground/5 rounded mb-1"></div>
                <div className="h-3 w-4/6 bg-foreground/5 rounded"></div>
              </div>

              {/* Main hero image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Freelancers working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
