
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { AnimateOnScroll } from "./ui/animations";
import { Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    description: "Essential features for individuals",
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: [
      "Up to 10 project postings",
      "Basic freelancer search",
      "Standard support",
      "Secure payments",
      "7-day revision period",
    ],
    notIncluded: [
      "Priority placement",
      "Advanced reporting",
      "Dedicated account manager",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Perfect for growing businesses",
    monthlyPrice: 49.99,
    yearlyPrice: 499.99,
    features: [
      "Up to 50 project postings",
      "Advanced freelancer search",
      "Priority support",
      "Secure payments",
      "14-day revision period",
      "Priority placement",
      "Basic reporting tools",
    ],
    notIncluded: ["Dedicated account manager"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and large projects",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    features: [
      "Unlimited project postings",
      "Premium freelancer search",
      "24/7 priority support",
      "Secure payments",
      "30-day revision period",
      "Priority placement",
      "Advanced reporting",
      "Dedicated account manager",
      "Custom contract templates",
    ],
    notIncluded: [],
    popular: false,
  },
];

export function Pricing() {
  const [annually, setAnnually] = useState(false);
  const [projectCount, setProjectCount] = useState(10);

  const handleSliderChange = (value: number[]) => {
    setProjectCount(value[0]);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slide-up" className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business, from individual freelancers to enterprise teams.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={100} className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className={`text-base font-medium ${!annually ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={annually}
              onCheckedChange={setAnnually}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-base font-medium flex items-center gap-2 ${annually ? 'text-primary' : 'text-muted-foreground'}`}>
              Annually
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Save 16%
              </span>
            </span>
          </div>

          <div className="w-full max-w-xl mb-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Project count</span>
              <span className="text-sm font-medium">{projectCount} projects</span>
            </div>
            <Slider 
              defaultValue={[10]} 
              max={100}
              step={5}
              onValueChange={handleSliderChange}
              className="mb-6"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>5</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100+</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <AnimateOnScroll
              key={plan.id}
              animation="slide-up"
              delay={index * 100 + 200}
              className="flex"
            >
              <Card className={`w-full flex flex-col hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-primary relative' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">
                        ${annually ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{annually ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <X size={18} className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
