import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import RolesSection from "@/components/RolesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ModernLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Navigation />
        <HeroSection />
      </div>
      
      <div className="relative">
        <AboutSection />
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <SkillsSection />
        </div>
        <ProjectsSection />
        <div className="bg-gradient-to-r from-accent/5 to-primary/5">
          <RolesSection />
        </div>
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default ModernLayout;