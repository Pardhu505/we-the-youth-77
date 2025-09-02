import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-dm-serif font-bold text-primary">
              We The Youth
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <a
                        href="#vision"
                        className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                      >
                        Vision & Mission
                      </a>
                      <a
                        href="#focus"
                        className="block px-3 py-2 text-sm text-foreground hover:bg-accent/10 rounded-md transition-colors"
                      >
                        Our Focus
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#impact" className="text-foreground hover:text-primary transition-colors">
              Impact
            </a>
            <a href="#newsletter" className="text-foreground hover:text-primary transition-colors">
              Youth Pulse Report
            </a>
            <Button variant="cta" size="sm">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <div className="space-y-2">
                <p className="text-foreground font-medium">About Us</p>
                <a
                  href="#vision"
                  className="text-muted-foreground hover:text-primary transition-colors py-1 pl-4 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vision & Mission
                </a>
                <a
                  href="#focus"
                  className="text-muted-foreground hover:text-primary transition-colors py-1 pl-4 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Focus
                </a>
              </div>
              <a
                href="#impact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="#newsletter"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Youth Pulse Report
              </a>
              <Button variant="cta" size="sm" className="w-fit">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};