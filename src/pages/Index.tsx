import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { NextGenLeadersSection } from "@/components/NextGenLeadersSection";
import { AboutSection } from "@/components/AboutSection";
import { FocusAreasSection } from "@/components/FocusAreasSection";
import { ImpactSection } from "@/components/ImpactSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TakeActionSection } from "@/components/TakeActionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleRegistrationSuccess = (email: string) => {
    setUserEmail(email);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection onRegistrationSuccess={handleRegistrationSuccess} />
      <NextGenLeadersSection userEmail={userEmail} />
      <AboutSection />
      <FocusAreasSection />
      <ImpactSection />
      <NewsletterSection />
      <TakeActionSection onRegistrationSuccess={handleRegistrationSuccess} />
      <Footer />
    </div>
  );
};

export default Index;
