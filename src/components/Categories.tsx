
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimateOnScroll } from "./ui/animations";
import { FreelancerCard } from "./FreelancerCard";
import { ArrowRight } from "lucide-react";

// Mock data for freelancers (Ghanaian university students)
const mockFreelancers = {
  design: [
    {
      name: "Kwame Mensah",
      title: "UI/UX Designer",
      rating: 4.9,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["UI Design", "User Research", "Figma", "Prototyping"],
      university: "University of Ghana",
    },
    {
      name: "Abena Osei",
      title: "Product Designer",
      rating: 4.8,
      hourlyRate: 95,
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Product Design", "Design Systems", "User Testing", "Figma"],
      university: "Kwame Nkrumah University of Science and Technology",
    },
    {
      name: "Kofi Agyeman",
      title: "Graphic Designer",
      rating: 4.7,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      skills: ["Branding", "Illustration", "Typography", "Adobe Creative Suite"],
      university: "University of Cape Coast",
    },
  ],
  development: [
    {
      name: "Daniel Adjei",
      title: "Full-Stack Developer",
      rating: 4.9,
      hourlyRate: 105,
      imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      university: "Ashesi University",
    },
    {
      name: "Ama Darko",
      title: "Frontend Developer",
      rating: 4.8,
      hourlyRate: 95,
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["React", "Vue.js", "CSS/SCSS", "Tailwind CSS"],
      university: "Ghana Communication Technology University",
    },
    {
      name: "Emmanuel Owusu",
      title: "Backend Developer",
      rating: 4.7,
      hourlyRate: 100,
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      university: "University of Ghana",
    },
  ],
  marketing: [
    {
      name: "Gifty Appiah",
      title: "Digital Marketing Specialist",
      rating: 4.9,
      hourlyRate: 80,
      imageUrl: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      skills: ["SEO", "Content Marketing", "Google Ads", "Analytics"],
      university: "University of Professional Studies, Accra",
    },
    {
      name: "Kwesi Boateng",
      title: "Social Media Manager",
      rating: 4.8,
      hourlyRate: 70,
      imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Social Media Strategy", "Content Creation", "Paid Social", "Analytics"],
      university: "Kwame Nkrumah University of Science and Technology",
    },
    {
      name: "Akosua Asante",
      title: "PPC Specialist",
      rating: 4.7,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      skills: ["Google Ads", "Facebook Ads", "Analytics", "Campaign Management"],
      university: "Central University",
    },
  ],
  writing: [
    {
      name: "Joseph Manu",
      title: "Content Writer",
      rating: 4.9,
      hourlyRate: 65,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Blog Writing", "SEO Writing", "Research", "Editing"],
      university: "University of Cape Coast",
    },
    {
      name: "Nana Addo",
      title: "Copywriter",
      rating: 4.8,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      skills: ["Ad Copy", "Website Copy", "Email Marketing", "Brand Voice"],
      university: "Ashesi University",
    },
    {
      name: "Efua Mensah",
      title: "Technical Writer",
      rating: 4.7,
      hourlyRate: 80,
      imageUrl: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      skills: ["Technical Documentation", "API Docs", "Knowledge Base", "User Guides"],
      university: "Ghana Communication Technology University",
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
            Top Rated Ghanaian Student Freelancers
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Discover student talent by category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of top-rated Ghanaian university students across various categories, 
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
                    university={freelancer.university}
                    delay={idx * 100}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <AnimateOnScroll animation="fade-in" delay={300} className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Browse All Student Freelancers <ArrowRight size={16} className="ml-2" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
