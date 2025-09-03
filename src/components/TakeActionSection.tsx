import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Heart } from "lucide-react";
import { RegistrationDialog } from "./RegistrationDialog";
export const TakeActionSection = () => {
  return <section className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-dm-serif font-bold text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl font-playfair text-muted-foreground max-w-3xl mx-auto">
            Be part of the change you want to see. Together, we can amplify youth voices across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Card className="p-8 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
            <div className="mb-6">
              <Users className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={64} />
            </div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-foreground">
              Join as a Member
            </h3>
            <p className="text-muted-foreground mb-6">
              Become part of our growing community of young changemakers and have your voice heard on national issues.
            </p>
            <RegistrationDialog>
              <Button variant="hero" className="w-full">
                Become a Member
              </Button>
            </RegistrationDialog>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-hover transition-all duration-300 group">
            <div className="mb-6">
              <Handshake className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={64} />
            </div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-foreground">
              Partner with Us
            </h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with us to create meaningful impact and reach more young voices across the country.
            </p>
            <Button variant="outline" className="w-full">
              Explore Partnership
            </Button>
          </Card>

          
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 shadow-hover">
            <h3 className="text-2xl md:text-3xl font-dm-serif font-bold mb-4 text-foreground">
              Ready to make a difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join the 1,000,000 Youth Movement and help shape India's future
            </p>
            <RegistrationDialog>
              <Button variant="cta" size="lg" className="text-lg px-12">
                Join the 1,000,000 Youth Movement
              </Button>
            </RegistrationDialog>
          </Card>
        </div>
      </div>
    </section>;
};