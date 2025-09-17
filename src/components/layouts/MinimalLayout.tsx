import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import RolesSection from "@/components/RolesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MinimalLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 space-y-32">
        <HeroSection />
        
        <div className="border-l-2 border-accent/20 pl-8">
          <AboutSection />
        </div>
        
        <SkillsSection />
        
        <div className="border-l-2 border-secondary/20 pl-8">
          <ProjectsSection />
        </div>
        
        <RolesSection />
        
        <div className="border-l-2 border-primary/20 pl-8">
          <TestimonialsSection />
        </div>
        
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default MinimalLayout;