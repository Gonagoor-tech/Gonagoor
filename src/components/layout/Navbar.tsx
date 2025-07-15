import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
// import { useIsMobile } from "@/hooks/use-mobile"; // Keeping this commented as Tailwind classes handle responsiveness well

const navItems = [
  { title: "Services", path: "/services" },
  { title: "Research", path: "/research" },
  { title: "Spinoffs", path: "/spinoffs" },
  { title: "Patents", path: "/patents" },
  { title: "Careers", path: "/careers" },
  { title: "Contact", path: "/contact" },
];

const whatWeDoItems = [
  { title: "Team", path: "/team", description: "Our dedicated team" },
  { title: "Portfolio", path: "/portfolio", description: "Explore our work" },
  { title: "Vision", path: "/vision", description: "Mission & values" },
];

const divisionItems = [
  { title: "Aerospace", path: "/aerospace", description: "Advanced systems" },
  { title: "AI", path: "/ai", description: "AI solutions" },
  { title: "Software", path: "/software", description: "Custom software" },
  { title: "Mobility", path: "/mobility", description: "EV solutions" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  // const isMobile = useIsMobile(); // Not directly used for rendering logic, Tailwind classes handle this.

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<"what" | "div" | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<{ what: boolean; div: boolean }>({ what: false, div: false });

  // Ref to get the height of the header
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update header height when scrolled state changes or on mount
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight(); // Initial set
    window.addEventListener("resize", updateHeaderHeight); // Recalculate on resize
    // Re-calculate when isScrolled changes, as header height might vary
    // A small delay ensures styles are applied before measurement
    const timeoutId = setTimeout(updateHeaderHeight, 50);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, [isScrolled]); // Depend on isScrolled

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    // Also close mobile dropdowns when route changes
    setMobileDropdown({ what: false, div: false });
  }, [location.pathname]);

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const renderDropdown = (
    items: { title: string; path: string; description: string }[],
    type: "what" | "div"
  ) => (
    <div
      className={cn(
        "absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 z-50 transition-all",
        dropdownOpen === type ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <ul className="py-2">
        {items.map(({ title, path, description }) => (
          <li key={path}>
            <Link
              to={path}
              className="block px-4 py-2 hover:bg-primary/10 transition-colors"
              onClick={() => {
                setDropdownOpen(null);
                // Close mobile menu if open (important for mobile desktop hybrid interaction)
                if (mobileOpen) setMobileOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              <div className="font-medium text-sm text-foreground">{title}</div>
              <p className="text-xs text-muted-foreground">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header
      ref={headerRef} // Assign the ref here
      className={cn(
        "fixed top-0 w-full z-50 transition-all backdrop-blur-md",
        isScrolled ? "bg-white/90 shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-20" onClick={() => window.scrollTo(0, 0)}> {/* Added z-20 for logo on mobile */}
          <img src="/lovable-uploads/2eff5a32-1f8a-4322-9f1a-38ae1d2354b8.png" alt="Logo" className={cn("object-contain", isScrolled ? "h-9" : "h-10")} />
          <span className={cn("font-bold text-lg sm:inline-block", isScrolled ? "text-base" : "text-lg")}>
            Gonagoor<span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen("what")} // Removed !isMobile check here as this nav is hidden on mobile
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              onClick={() => setDropdownOpen(dropdownOpen === "what" ? null : "what")}
            >
              What We Do <ChevronDown size={16} className={dropdownOpen === "what" ? "rotate-180" : ""} />
            </button>
            {renderDropdown(whatWeDoItems, "what")}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen("div")} // Removed !isMobile check
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              onClick={() => setDropdownOpen(dropdownOpen === "div" ? null : "div")}
            >
              Divisions <ChevronDown size={16} className={dropdownOpen === "div" ? "rotate-180" : ""} />
            </button>
            {renderDropdown(divisionItems, "div")}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium",
                location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Button to="/contact" className="bg-primary text-white hover:bg-primary/90">Get in Touch</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden z-20" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed right-0 w-full bg-white transition-transform duration-300 z-40 overflow-y-auto shadow-lg", // Added shadow-lg for visual separation
          mobileOpen ? "translate-x-0" : "translate-x-full" // Changed to translate-x for slide-in from right
        )}
        style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }} // Dynamically set top and height
      >
        <div className="px-4 py-8 md:px-6 space-y-6"> {/* Increased vertical padding slightly */}
          {/* Dropdown Mobile */}
          {[
            { label: "What We Do", type: "what", items: whatWeDoItems },
            { label: "Divisions", type: "div", items: divisionItems },
          ].map(({ label, type, items }) => (
            <div key={type}>
              <button
                className="flex justify-between items-center w-full text-lg font-medium py-2" // Added py-2 for better touch target
                onClick={() =>
                  setMobileDropdown((prev) => ({ ...prev, [type]: !prev[type] }))
                }
              >
                {label}
                <ChevronDown
                  size={18}
                  className={cn("transition-transform", mobileDropdown[type] && "rotate-180")}
                />
              </button>
              <ul className={cn("pl-4 mt-2 space-y-2 border-l border-gray-200 ml-2", mobileDropdown[type] ? "block" : "hidden")}> {/* Added border-l for visual structure */}
                {items.map(({ title, path, description }) => ( // Added description for consistency with desktop
                  <li key={path}>
                    <Link
                      to={path}
                      className={cn(
                        "block py-1 text-base", // Changed to text-base for better readability
                        location.pathname === path ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => {
                        setMobileOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="font-medium text-foreground">{title}</div>
                      <p className="text-xs text-muted-foreground">{description}</p> {/* Show description here too */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Links */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block text-lg py-2", // Added py-2 for better touch target
                location.pathname === item.path ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              )}
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {item.title}
            </Link>
          ))}

          {/* CTA Button */}
          <Button
            to="/contact"
            className="w-full mt-8 bg-primary text-white hover:bg-primary/90" // Increased margin-top
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;