
import { CheckCircle, FileText, Search, Shield } from "lucide-react";
import { AnimateOnScroll } from "./ui/animations";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Post a job or find work",
    description: "Describe your project or browse freelancer profiles with detailed skills and experience.",
    delay: 0,
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Select the perfect match",
    description: "Choose from qualified freelancers or get hired based on your portfolio and expertise.",
    delay: 100,
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Work with confidence",
    description: "Our secure payment system ensures protected transactions and guaranteed quality work.",
    delay: 200,
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: "Collaborate efficiently",
    description: "Communicate seamlessly, deliver milestones, and build lasting professional relationships.",
    delay: 300,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slide-up" className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How FreelanceHub works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process connects clients with skilled freelancers in just a few simple steps,
            making it easy to get quality work done quickly.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10"></div>

          {steps.map((step, index) => (
            <AnimateOnScroll 
              key={index}
              animation="slide-up" 
              delay={step.delay}
              className="relative"
            >
              <div className="glass-card p-6 rounded-xl text-center hover:shadow-medium transition-all duration-300">
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/5 rounded-full mb-6">
                  {step.icon}
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 border-4 border-background hidden lg:block"></div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
