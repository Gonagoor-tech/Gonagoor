import React from "react";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Research", path: "/research" },
    { name: "Vision", path: "/vision" },
    { name: "Spinoffs", path: "/spinoffs" },
    { name: "Contact", path: "/contact" }
  ];
  
  const divisionLinks = [
    { name: "AI", path: "/ai" },
    { name: "Software", path: "/software" },
    { name: "Mobility", path: "/mobility" },
    { name: "Aerospace", path: "/aerospace" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 p-1.5">
                <img 
                  src="/lovable-uploads/2eff5a32-1f8a-4322-9f1a-38ae1d2354b8.png" 
                  alt="GonagoorTech" 
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Gonagoor<span className="text-primary">Tech</span></h3>
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Technologies for Global Good
            </p>
            <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm text-white/80 text-xs">
              <p className="font-medium text-white mb-2">Registration:</p>
              <p>CIN Number: U62099KA2025PTC202184</p> 
              <p>GST No: 29AWPPP8448J1ZH</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Divisions</h3>
            <ul className="space-y-2 text-sm">
              {divisionLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white/70">
                  No 78, South Sparta Apartments, Flat no 206, JP Nagar 5th phase, Bengaluru, IN
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:writetous@gonagoortech.com" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  writetous@gonagoor.com
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/gonagoor-technology-solutions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/gonagoor_tech/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
          <p>© {currentYear} Gonagoor Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
