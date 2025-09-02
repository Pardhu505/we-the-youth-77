import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FocusAreasSection } from "@/components/FocusAreasSection";
import { ImpactSection } from "@/components/ImpactSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { TakeActionSection } from "@/components/TakeActionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FocusAreasSection />
      <ImpactSection />
      <NewsletterSection />
      <TakeActionSection />
      <Footer />
    </div>
  );
};

export default Index;
