import { Card } from "@/components/ui/card";
import { Users, MapPin, Megaphone, Target } from "lucide-react";
export const ImpactSection = () => {
  return <section id="impact" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-dm-serif font-bold text-foreground mb-6">
            Our Reach
          </h2>
          <p className="text-xl font-playfair text-muted-foreground max-w-3xl mx-auto">
            Building a movement that spans across India, one voice at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 mx-[10px] my-[10px]">
          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <Users className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-3xl font-bold text-foreground mb-2">50,000+</div>
            <p className="text-muted-foreground">Young People Reached</p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <MapPin className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-3xl font-bold text-foreground mb-2">28</div>
            <p className="text-muted-foreground">States Represented</p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <Megaphone className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-3xl font-bold text-foreground mb-2">15</div>
            <p className="text-muted-foreground">Campaigns Launched</p>
          </Card>

          
        </div>

        {/* Map Placeholder */}
        <Card className="p-8 mb-12 shadow-card">
          <h3 className="text-xl font-dm-serif font-bold text-center mb-6">
            Presence Across India
          </h3>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-primary" size={64} />
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              <p className="text-sm text-muted-foreground mt-2">
                Highlighting our reach across 28 states
              </p>
            </div>
          </div>
        </Card>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-foreground mb-3 italic">
                  "Being part of this network gave me a voice and the platform to make real change in my community."
                </p>
                <p className="text-sm text-muted-foreground">— Priya, Student Leader from Mumbai</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-foreground mb-3 italic">"Through We The Youth India, I learned that my ideas matter and can contribute to national conversations."</p>
                <p className="text-sm text-muted-foreground">— Arjun, Youth Activist from Delhi</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};