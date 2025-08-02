import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const navItems = [{
    id: "hero",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "testimonials",
    label: "Testimonials"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-lg text-primary">Anita Odiete</div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <Button key={item.id} variant={activeSection === item.id ? "default" : "ghost"} size="sm" onClick={() => scrollToSection(item.id)} className="text-sm font-medium">
                {item.label}
              </Button>)}
          </div>

          <Button size="sm" onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent-light text-accent-foreground">
            Let's Connect
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;