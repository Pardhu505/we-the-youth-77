import { Instagram, Twitter, Youtube, Facebook, Mail, Phone } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-youth-black text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-dm-serif font-bold mb-4">We The Youth</h3>
            <p className="text-gray-300 mb-6">
              Empowering India's youth to shape the nation's decisions through voice, influence, and representation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-dm-serif font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-accent transition-colors">
                Home
              </a>
              <a href="#vision" className="block text-gray-300 hover:text-accent transition-colors">
                About
              </a>
              <a href="#focus" className="block text-gray-300 hover:text-accent transition-colors">
                Focus Areas
              </a>
              <a href="#impact" className="block text-gray-300 hover:text-accent transition-colors">
                Impact
              </a>
              <a href="#newsletter" className="block text-gray-300 hover:text-accent transition-colors">
                Youth Pulse Report
              </a>
            </div>
          </div>

          {/* Trust Section */}
          <div>
            <h4 className="text-lg font-dm-serif font-bold mb-4">Partners & Media</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="text-sm mb-2">Featured in:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span>The Hindu</span>
                  <span>TOI</span>
                  <span>NDTV</span>
                  <span>CNN-IBN</span>
                </div>
              </div>
              <div className="text-gray-300">
                <p className="text-sm mb-2">Supported by:</p>
                <div className="text-xs space-y-1">
                  <span className="block">Partner organizations</span>
                  <span className="block">NGO collaborators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-dm-serif font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>contact@wetheyouthindia.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+91 98765 xxxxx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 We The Youth India. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};