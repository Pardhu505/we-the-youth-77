import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, FileText, Lightbulb, Calendar, Users, ArrowRight } from "lucide-react";

export const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Subscription failed");
      }

      toast({
        title: "Success!",
        description: "You have been subscribed to the newsletter.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "There was a problem with your request.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl -z-10"></div>
          <div className="py-16 px-8">
            <h1 className="text-4xl md:text-6xl font-dm-serif font-bold text-foreground mb-6">
              Stay in the Loop with the Youth Pulse
            </h1>
            <p className="text-xl font-playfair text-muted-foreground max-w-2xl mx-auto mb-8">
              A quarterly newsletter capturing what India's youth is thinking.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="h-12 px-8"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>

        {/* Latest Issue */}
        <div className="mb-20">
          <h2 className="text-3xl font-dm-serif font-bold text-center mb-12">Latest Issue</h2>
          <Card className="max-w-2xl mx-auto p-8 shadow-hover">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 aspect-[3/4] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="mx-auto mb-4 text-primary" size={64} />
                  <p className="text-sm text-muted-foreground">Issue Cover</p>
                </div>
              </div>
              <div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2" size={16} />
                  Q4 2024
                </div>
                <h3 className="text-xl font-dm-serif font-bold mb-4">
                  The Future of Work: What Young India Thinks
                </h3>
                <p className="text-muted-foreground mb-6">
                  Insights from 10,000+ young Indians on career aspirations, remote work, and the evolving job market.
                </p>
                <Button variant="outline" className="w-full">
                  Read Now <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Past Issues Archive */}
        <div className="mb-20">
          <h2 className="text-3xl font-dm-serif font-bold text-center mb-4">Past Issues Archive</h2>
          <p className="text-lg font-playfair text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our previous editions covering the most important topics shaping India's youth
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quarter: "Q3 2024", title: "Climate Action & Youth Leadership", date: "Sep 2024" },
              { quarter: "Q2 2024", title: "Digital India: Opportunities & Challenges", date: "Jun 2024" },
              { quarter: "Q1 2024", title: "Education Reform: Student Voices", date: "Mar 2024" },
              { quarter: "Q4 2023", title: "Mental Health & Wellbeing", date: "Dec 2023" },
              { quarter: "Q3 2023", title: "Entrepreneurship Among Youth", date: "Sep 2023" },
              { quarter: "Q2 2023", title: "Social Media & Generation Z", date: "Jun 2023" },
            ].map((issue, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 aspect-[3/4] rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="text-primary" size={32} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{issue.date}</div>
                <h3 className="font-semibold mb-3 text-sm leading-tight">{issue.title}</h3>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Read Issue
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribute Section */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-primary/20">
            <div className="text-center">
              <Lightbulb className="mx-auto mb-4 text-accent" size={48} />
              <h2 className="text-2xl font-dm-serif font-bold mb-4">Have a Story to Tell?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Share your perspective, pitch a story, or contribute to upcoming issues. Your voice matters in shaping the conversation.
              </p>
              <Button variant="hero" size="lg">
                Contribute Your Idea
              </Button>
            </div>
          </Card>
        </div>

        {/* Final CTA Banner */}
        <Card className="p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
          <Users className="mx-auto mb-6 text-primary" size={64} />
          <h2 className="text-3xl font-dm-serif font-bold mb-4">Join 50,000+ Young Voices</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know what's shaping India's youth narrative. Subscribe now and never miss an issue.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="h-12 px-12"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};