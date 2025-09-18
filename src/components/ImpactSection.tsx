import { Card } from "@/components/ui/card";
import { Users, MapPin, Megaphone, Target } from "lucide-react";
import { IndiaMap } from "@vishalvoid/react-india-map";
import type { StateData } from "@vishalvoid/react-india-map";

export const ImpactSection = () => {
  const stateData: StateData[] = [
    { id: "IN-AP", customData: { value: 10 } },
    { id: "IN-AR", customData: { value: 20 } },
    { id: "IN-AS", customData: { value: 30 } },
    { id: "IN-BR", customData: { value: 40 } },
    { id: "IN-CT", customData: { value: 50 } },
    { id: "IN-GA", customData: { value: 60 } },
    { id: "IN-GJ", customData: { value: 70 } },
    { id: "IN-HR", customData: { value: 80 } },
    { id: "IN-HP", customData: { value: 90 } },
    { id: "IN-JH", customData: { value: 100 } },
    { id: "IN-KA", customData: { value: 110 } },
    { id: "IN-KL", customData: { value: 120 } },
    { id: "IN-MP", customData: { value: 130 } },
    { id: "IN-MH", customData: { value: 140 } },
    { id: "IN-MN", customData: { value: 150 } },
    { id: "IN-ML", customData: { value: 160 } },
    { id: "IN-MZ", customData: { value: 170 } },
    { id: "IN-NL", customData: { value: 180 } },
    { id: "IN-OR", customData: { value: 190 } },
    { id: "IN-PB", customData: { value: 200 } },
    { id: "IN-RJ", customData: { value: 210 } },
    { id: "IN-SK", customData: { value: 220 } },
    { id: "IN-TN", customData: { value: 230 } },
    { id: "IN-TG", customData: { value: 240 } },
    { id: "IN-TR", customData: { value: 250 } },
    { id: "IN-UP", customData: { value: 260 } },
    { id: "IN-UT", customData: { value: 270 } },
    { id: "IN-WB", customData: { value: 280 } },
    { id: "IN-AN", customData: { value: 290 } },
    { id: "IN-CH", customData: { value: 300 } },
    { id: "IN-DN", customData: { value: 310 } },
    { id: "IN-DL", customData: { value: 320 } },
    { id: "IN-JK", customData: { value: 330 } },
    { id: "IN-LA", customData: { value: 340 } },
    { id: "IN-LD", customData: { value: 350 } },
    { id: "IN-PY", customData: { value: 360 } },
  ];

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
            <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
            <p className="text-muted-foreground">Young People Reached</p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <MapPin className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-3xl font-bold text-foreground mb-2">13</div>
            <p className="text-muted-foreground">States Represented</p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300">
            <Megaphone className="mx-auto mb-4 text-primary" size={48} />
            <div className="text-3xl font-bold text-foreground mb-2">5</div>
            <p className="text-muted-foreground">Campuses Reached</p>
          </Card>

          
        </div>

        {/* Map Placeholder */}
        <Card className="p-8 mb-12 shadow-card">
          <h3 className="text-xl font-dm-serif font-bold text-center mb-6">
            Presence Across India
          </h3>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
            <div className="w-full max-w-[600px]">
              <IndiaMap
                stateData={stateData}
                mapStyle={{
                  backgroundColor: "transparent",
                  hoverColor: "#a3e635", // a lime green color
                  stroke: "#000000",
                  strokeWidth: 1,
                }}
              />
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
