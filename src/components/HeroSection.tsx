import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-dm-serif font-bold text-foreground mb-6 leading-tight">
            Half of India is under 30.
            <br />
            <span className="text-primary">Its voice should be too.</span>
          </h1>
          <p className="text-xl md:text-2xl font-playfair text-muted-foreground mb-8 max-w-4xl mx-auto">
            From townhall conversations to issue briefs, from digital polls to national campaigns - we create spaces where India's youth can be heard, and where their perspectives help shape tomorrow's decisions.
          </p>
        </div>

        {/* Interactive Dashboard Mock */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-dm-serif font-bold text-center mb-8">
            The Gap: Youth Population vs Youth Representation
          </h2>
          
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <p className="text-muted-foreground">Youth Population (Under 30)</p>
                </div>
                <div className="h-4 bg-accent rounded-full">
                  <div className="h-4 bg-primary rounded-full w-1/2"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">12%</div>
                  <p className="text-muted-foreground">Youth in Decision Making</p>
                </div>
                <div className="h-4 bg-muted rounded-full">
                  <div className="h-4 bg-destructive rounded-full w-[12%]"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <Users className="mx-auto mb-2 text-primary" size={24} />
                <div className="text-lg font-bold">600M+</div>
                <p className="text-sm text-muted-foreground">Young Indians</p>
              </div>
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-primary" size={24} />
                <div className="text-lg font-bold">28</div>
                <p className="text-sm text-muted-foreground">States Reached</p>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 text-primary" size={24} />
                <div className="text-lg font-bold">15</div>
                <p className="text-sm text-muted-foreground">Campaigns</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg">
            Join Us
          </Button>
          <p className="text-muted-foreground mt-4">
            Join the movement to amplify youth voices across India
          </p>
        </div>
      </div>
    </section>
  );
};