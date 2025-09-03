import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, TrendingUp, Users, Zap } from "lucide-react";
import { RegistrationDialog } from "./RegistrationDialog";
export const AboutSection = () => {
  return <section id="vision" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-dm-serif font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl font-playfair text-muted-foreground max-w-3xl mx-auto">
            <strong>Vision:</strong> To make India's youth the driving force in shaping the nation's decisions
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-dm-serif font-bold text-center mb-12">
            Mission: <span className="text-primary">VIRA</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="mb-4">
                <Mic className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-dm-serif font-bold mb-3 text-foreground">Voice</h4>
              <p className="text-muted-foreground">
                We don't speak for the youth; we provide the platform for them to speak for themselves.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="mb-4">
                <TrendingUp className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-dm-serif font-bold mb-3 text-foreground">Influence</h4>
              <p className="text-muted-foreground">
                We take issues identified by our community and amplify them into national conversations.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="mb-4">
                <Users className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-dm-serif font-bold mb-3 text-foreground">Representation</h4>
              <p className="text-muted-foreground">We're creating a national community of 1,000,000+ motivated young Indians to serve as the power of our movement.</p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
              <div className="mb-4">
                <Zap className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-dm-serif font-bold mb-3 text-foreground">Action</h4>
              <p className="text-muted-foreground">Mobilize youth energy into real impact through campaigns, debates, and ground-up initiatives.

            </p>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegistrationDialog>
              <Button variant="hero">Join Us</Button>
            </RegistrationDialog>
            <Button variant="hero">Partner With Us</Button>
            
          </div>
        </div>
      </div>
    </section>;
};