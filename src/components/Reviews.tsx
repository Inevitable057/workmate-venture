
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimateOnScroll } from "./ui/animations";
import { Star, MessageSquare, ThumbsUp, X } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";

// Mock data for reviews
const mockReviews = [
  {
    id: 1,
    freelancerName: "Sophia Chen",
    clientName: "Robert Johnson",
    clientCompany: "TechSolutions Inc.",
    rating: 5,
    date: "2023-11-15",
    comment: "Sophia exceeded all my expectations! Her UI designs were not only beautiful but also incredibly intuitive. She was receptive to feedback and delivered ahead of schedule. I've already hired her for our next project.",
    helpful: 24,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    freelancerName: "James Wilson",
    clientName: "Emily Davis",
    clientCompany: "GrowthMarketing",
    rating: 4,
    date: "2023-10-28",
    comment: "James delivered high-quality code and was very professional throughout the project. He communicated well and addressed all our requirements. The only reason for 4 stars instead of 5 is that we had a slight delay in the final delivery, but the quality made up for it.",
    helpful: 18,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    id: 3,
    freelancerName: "Mei Zhang",
    clientName: "Carlos Reyes",
    clientCompany: "BrandForward",
    rating: 5,
    date: "2023-12-05",
    comment: "Mei is incredibly talented! Her illustrations and branding work transformed our company's visual identity. She took the time to understand our vision and translated it perfectly into design. Working with her was smooth and enjoyable.",
    helpful: 32,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    freelancerName: "Aisha Johnson",
    clientName: "Sarah Wong",
    clientCompany: "EcomStore",
    rating: 5,
    date: "2023-11-20",
    comment: "Aisha is a frontend wizard! She completely revamped our e-commerce interface, making it not only beautiful but also significantly more user-friendly. Our conversion rates improved by 18% since launching the new design. Her attention to detail and responsive design expertise is outstanding.",
    helpful: 27,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
  },
];

interface ReviewCardProps {
  review: typeof mockReviews[0];
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [helpful, setHelpful] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpful(helpful + 1);
      setHasVoted(true);
      toast.success("Thanks for your feedback!");
    }
  };

  return (
    <AnimateOnScroll animation="scale-in" className="glass-card p-6 rounded-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={review.avatar}
              alt={review.clientName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{review.clientName}</h4>
            <p className="text-sm text-muted-foreground">{review.clientCompany}</p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {new Date(review.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center mb-2">
          <p className="text-sm mr-2">Review for <span className="font-medium">{review.freelancerName}</span></p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{review.comment}</p>
      </div>

      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-sm text-muted-foreground hover:text-primary"
          onClick={handleHelpful}
          disabled={hasVoted}
        >
          <ThumbsUp size={14} className="mr-1" />{" "}
          {helpful} found this helpful
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          <MessageSquare size={14} className="mr-1" /> Reply
        </Button>
      </div>
    </AnimateOnScroll>
  );
};

export function Reviews() {
  const [activeTab, setActiveTab] = useState("all");
  const [openWriteReview, setOpenWriteReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const form = useForm({
    defaultValues: {
      freelancerName: "",
      review: "",
    },
  });

  const submitReview = (data: any) => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    
    console.log({ ...data, rating });
    toast.success("Thank you for your review!");
    setOpenWriteReview(false);
    form.reset();
    setRating(0);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animation="slide-up" className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Testimonials & Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What our clients are saying
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from businesses and individuals who have worked with our talented freelancers.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row justify-between mb-8">
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full md:w-auto"
          >
            <AnimateOnScroll animation="slide-up" delay={100} className="flex justify-center md:justify-start mb-6">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="5">5 Star</TabsTrigger>
                <TabsTrigger value="4">4 Star</TabsTrigger>
                <TabsTrigger value="3">3 Star & Below</TabsTrigger>
              </TabsList>
            </AnimateOnScroll>
          </Tabs>

          <AnimateOnScroll animation="slide-up" delay={150} className="mb-6 md:mb-0">
            <Popover open={openWriteReview} onOpenChange={setOpenWriteReview}>
              <PopoverTrigger asChild>
                <Button>Write a Review</Button>
              </PopoverTrigger>
              <PopoverContent className="w-96" align="end">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Write a Review</h4>
                    <p className="text-sm text-muted-foreground">
                      Share your experience with a freelancer
                    </p>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitReview)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="freelancerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Freelancer Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter freelancer name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="space-y-2">
                        <FormLabel>Rating</FormLabel>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={24}
                              className={`cursor-pointer ${
                                star <= (hoverRating || rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="review"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Review</FormLabel>
                            <FormControl>
                              <textarea 
                                className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Share your experience..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={() => setOpenWriteReview(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Submit Review</Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </PopoverContent>
            </Popover>
          </AnimateOnScroll>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="5" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockReviews
              .filter((review) => review.rating === 5)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="4" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockReviews
              .filter((review) => review.rating === 4)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="3" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockReviews
              .filter((review) => review.rating <= 3)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            {mockReviews.filter((review) => review.rating <= 3).length === 0 && (
              <div className="col-span-2 text-center py-12 text-muted-foreground">
                No reviews with 3 stars or below yet.
              </div>
            )}
          </div>
        </TabsContent>
      </div>
    </section>
  );
}
