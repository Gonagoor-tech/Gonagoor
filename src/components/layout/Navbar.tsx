import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Assuming Button can handle 'to' prop for navigation
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, isActive, onClick }) => (
  <li>
    <Link
      to={to}
      className={cn(
        "px-3 py-2 rounded-md transition-all relative text-sm font-medium",
        "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
        "hover:after:w-3/4",
        isActive
          ? "text-primary after:w-3/4"
          : "text-foreground/80 hover:text-primary"
      )}
      onClick={() => {
        window.scrollTo(0, 0);
        onClick?.();
      }}
    >
      {children}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);

  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { title: "Services", path: "/services" },
    { title: "Research", path: "/research" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" }
  ];

  const whatWeDoItems = [
    { title: "Team", path: "/team", description: "Meet our talented and dedicated team members" },
    { title: "Portfolio", path: "/portfolio", description: "Explore our past and current projects" },
    { title: "Vision", path: "/vision", description: "Learn about our mission and values" }
  ];

  const divisionItems = [
    { title: "Aerospace", path: "/aerospace", description: "Innovative aerospace systems and technologies" },
    { title: "AI", path: "/ai", description: "Cutting-edge artificial intelligence solutions" },
    { title: "Software", path: "/software", description: "Custom software development services" }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const toggleWhatWeDo = () => {
    setIsWhatWeDoOpen(prev => !prev);
  };

  const toggleDivisions = () => {
    setIsDivisionsOpen(prev => !prev);
  };

  const toggleMobileWhatWeDo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileWhatWeDoOpen(!mobileWhatWeDoOpen);
  };

  const toggleMobileDivisions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileDivisionsOpen(!mobileDivisionsOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-20" onClick={() => window.scrollTo(0,0)}>
          <div className={cn(
            "relative rounded-full overflow-hidden transition-all flex items-center justify-center shrink-0",
            scrolled ? "h-9 w-9" : "h-10 w-10"
          )}>
            <img
              src="/lovable-uploads/2eff5a32-1f8a-4322-9f1a-38ae1d2354b8.png"
              alt="GonagoorTech Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className={cn(
            "font-poppins font-semibold text-foreground hidden sm:inline-block transition-all",
            scrolled ? "text-base" : "text-lg"
          )}>
            Gonagoor<span className="text-primary">Tech</span>
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-1">
            <li
              className="relative"
              onMouseEnter={() => !isMobile && setIsWhatWeDoOpen(true)}
              onMouseLeave={() => !isMobile && setIsWhatWeDoOpen(false)}
            >
              <button
                id="what-we-do-button"
                className={cn(
                  "px-3 py-2 rounded-md transition-all relative text-sm font-medium flex items-center",
                  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-3/4",
                  (location.pathname === "/team" || location.pathname === "/portfolio" || location.pathname === "/vision" || isWhatWeDoOpen)
                    ? "text-primary after:w-3/4"
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={toggleWhatWeDo}
                aria-expanded={isWhatWeDoOpen}
              >
                What We Do
                <ChevronDown
                  size={16}
                  className={cn(
                    "ml-1 transition-transform",
                    isWhatWeDoOpen && "transform rotate-180"
                  )}
                />
              </button>
              <div
                id="what-we-do-dropdown"
                className={cn(
                  "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-gray-100 transition-all duration-200 z-50",
                  isWhatWeDoOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1 pointer-events-none"
                )}
              >
                <div className="py-2">
                  {whatWeDoItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsWhatWeDoOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="font-medium">{item.title}</div>
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={() => !isMobile && setIsDivisionsOpen(true)}
              onMouseLeave={() => !isMobile && setIsDivisionsOpen(false)}
            >
              <button
                id="divisions-button"
                className={cn(
                  "px-3 py-2 rounded-md transition-all relative text-sm font-medium flex items-center",
                  "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-3/4",
                  (location.pathname === "/aerospace" || location.pathname === "/ai" || location.pathname === "/software" || isDivisionsOpen)
                    ? "text-primary after:w-3/4"
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={toggleDivisions}
                aria-expanded={isDivisionsOpen}
              >
                Divisions
                <ChevronDown
                  size={16}
                  className={cn(
                    "ml-1 transition-transform",
                    isDivisionsOpen && "transform rotate-180"
                  )}
                />
              </button>
              <div
                id="divisions-dropdown"
                className={cn(
                  "absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-gray-100 transition-all duration-200 z-50",
                  isDivisionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1 pointer-events-none"
                )}
              >
                <div className="py-2">
                  {divisionItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsDivisionsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="font-medium">{item.title}</div>
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navItems.map((item) => (
              <NavItem
                key={item.path}
                to={item.path}
                isActive={location.pathname === item.path}
              >
                {item.title}
              </NavItem>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            to="/contact"
            variant="default"
            size="default"
            className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            Get in Touch
          </Button>
        </div>

        <button
          className="block lg:hidden text-foreground p-2 z-20 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-lg z-10 transition-all duration-300 lg:hidden overflow-auto",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-[-20px] pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={toggleMobileWhatWeDo}
              >
                <h3 className="text-lg font-medium">What We Do</h3>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-gray-500 transition-transform",
                    mobileWhatWeDoOpen && "transform rotate-180"
                  )}
                />
              </div>
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                mobileWhatWeDoOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <ul className="pl-4 pt-2 space-y-3">
                  {whatWeDoItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          "block py-2",
                          location.pathname === item.path
                            ? "text-primary font-medium"
                            : "text-foreground/80 hover:text-primary"
                        )}
                        onClick={() => {
                          closeMenu();
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="font-medium">{item.title}</div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={toggleMobileDivisions}
              >
                <h3 className="text-lg font-medium">Divisions</h3>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-gray-500 transition-transform",
                    mobileDivisionsOpen && "transform rotate-180"
                  )}
                />
              </div>
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                mobileDivisionsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <ul className="pl-4 pt-2 space-y-3">
                  {divisionItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          "block py-2",
                          location.pathname === item.path
                            ? "text-primary font-medium"
                            : "text-foreground/80 hover:text-primary"
                        )}
                        onClick={() => {
                          closeMenu();
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="font-medium">{item.title}</div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="divide-y divide-gray-100 mt-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center w-full py-4",
                      location.pathname === item.path
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-primary"
                    )}
                    onClick={() => {
                      closeMenu();
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 mt-4">
              <Button
                to="/contact"
                className="w-full py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300"
                size="lg"
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;