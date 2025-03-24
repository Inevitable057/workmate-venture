
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimateOnScroll } from "./ui/animations";
import { FreelancerCard } from "./FreelancerCard";
import { ArrowRight } from "lucide-react";

// Mock data for freelancers
const mockFreelancers = {
  design: [
    {
      name: "Sophia Chen",
      title: "UI/UX Designer",
      rating: 4.9,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["UI Design", "User Research", "Figma", "Prototyping"],
    },
    {
      name: "Alex Rivera",
      title: "Product Designer",
      rating: 4.8,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Product Design", "Design Systems", "User Testing", "Figma"],
    },
    {
      name: "Mei Zhang",
      title: "Graphic Designer",
      rating: 4.7,
      hourlyRate: 65,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      skills: ["Branding", "Illustration", "Typography", "Adobe Creative Suite"],
    },
  ],
  development: [
    {
      name: "James Wilson",
      title: "Full-Stack Developer",
      rating: 4.9,
      hourlyRate: 95,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    },
    {
      name: "Aisha Johnson",
      title: "Frontend Developer",
      rating: 4.8,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      skills: ["React", "Vue.js", "CSS/SCSS", "Tailwind CSS"],
    },
    {
      name: "Carlos Mendez",
      title: "Backend Developer",
      rating: 4.7,
      hourlyRate: 90,
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
    },
  ],
  marketing: [
    {
      name: "Emily Parker",
      title: "Digital Marketing Specialist",
      rating: 4.9,
      hourlyRate: 70,
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      skills: ["SEO", "Content Marketing", "Google Ads", "Analytics"],
    },
    {
      name: "Raj Patel",
      title: "Social Media Manager",
      rating: 4.8,
      hourlyRate: 65,
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Social Media Strategy", "Content Creation", "Paid Social", "Analytics"],
    },
    {
      name: "Sarah Thompson",
      title: "PPC Specialist",
      rating: 4.7,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      skills: ["Google Ads", "Facebook Ads", "Analytics", "Campaign Management"],
    },
  ],
  writing: [
    {
      name: "David Andrews",
      title: "Content Writer",
      rating: 4.9,
      hourlyRate: 60,
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Blog Writing", "SEO Writing", "Research", "Editing"],
    },
    {
      name: "Nina Patel",
      title: "Copywriter",
      rating: 4.8,
      hourlyRate: 70,
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Ad Copy", "Website Copy", "Email Marketing", "Brand Voice"],
    },
    {
      name: "Marcus Johnson",
      title: "Technical Writer",
      rating: 4.7,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Technical Documentation", "API Docs", "Knowledge Base", "User Guides"],
    },
  ],
};

const categories = [
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "marketing", label: "Marketing" },
  { id: "writing", label: "Writing" },
];

export function Categories() {
  const [activeTab, setActiveTab] = useState("design");

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slide-up" className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Top Rated Freelancers
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover talent by category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of top-rated professionals across various categories, 
            ready to bring your projects to life with exceptional quality.
          </p>
        </AnimateOnScroll>

        <Tabs
          defaultValue="design"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <AnimateOnScroll animation="slide-up" delay={100} className="flex justify-center mb-10">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </AnimateOnScroll>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFreelancers[category.id as keyof typeof mockFreelancers].map((freelancer, idx) => (
                  <FreelancerCard
                    key={`${category.id}-${idx}`}
                    name={freelancer.name}
                    title={freelancer.title}
                    rating={freelancer.rating}
                    hourlyRate={freelancer.hourlyRate}
                    imageUrl={freelancer.imageUrl}
                    skills={freelancer.skills}
                    delay={idx * 100}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <AnimateOnScroll animation="fade-in" delay={300} className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Browse All Freelancers <ArrowRight size={16} className="ml-2" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
