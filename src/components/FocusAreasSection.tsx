import { Card } from "@/components/ui/card";
import { 
  Building, 
  Shield, 
  Heart, 
  Wrench, 
  Leaf, 
  Brain, 
  Briefcase, 
  GraduationCap, 
  Lock 
} from "lucide-react";

const focusAreas = [
  {
    title: "Urban Regeneration",
    icon: Building,
    description: "Revitalizing cities for sustainable growth"
  },
  {
    title: "Women's Safety",
    icon: Shield,
    description: "Creating safe spaces for all women"
  },
  {
    title: "Obesity & Public Health",
    icon: Heart,
    description: "Promoting healthier lifestyle choices"
  },
  {
    title: "Skill Development",
    icon: Wrench,
    description: "Bridging the skills gap for employment"
  },
  {
    title: "Climate & SDGs",
    icon: Leaf,
    description: "Sustainable development for future generations"
  },
  {
    title: "Mental Health",
    icon: Brain,
    description: "Breaking stigma and providing support"
  },
  {
    title: "Employment",
    icon: Briefcase,
    description: "Creating opportunities for meaningful work"
  },
  {
    title: "Quality Education",
    icon: GraduationCap,
    description: "Accessible and relevant learning for all"
  },
  {
    title: "Privacy & Surveillance",
    icon: Lock,
    description: "Protecting digital rights and privacy"
  }
];

export const FocusAreasSection = () => {
  return (
    <section id="focus" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-dm-serif font-bold text-foreground mb-6">
            Our Focus
          </h2>
          <p className="text-xl font-playfair text-muted-foreground max-w-3xl mx-auto">
            We work across 9 thematic areas that matter most to India's youth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <IconComponent 
                      className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" 
                      size={48} 
                    />
                  </div>
                  <h3 className="text-lg font-dm-serif font-bold mb-3 text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {area.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};