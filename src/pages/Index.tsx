import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout, Grid, Minimize2, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import RolesSection from "@/components/RolesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ModernLayout from "@/components/layouts/ModernLayout";
import MinimalLayout from "@/components/layouts/MinimalLayout";

const themes = [
  {
    name: "Professional Navy",
    id: "professional",
    colors: {
      primary: "215 25% 15%",
      secondary: "155 35% 25%", 
      accent: "25 85% 55%",
      background: "42 15% 97%"
    }
  },
  {
    name: "Modern Purple",
    id: "modern",
    colors: {
      primary: "263 70% 20%",
      secondary: "280 60% 35%",
      accent: "310 80% 55%",
      background: "270 15% 97%"
    }
  },
  {
    name: "Tech Blue",
    id: "tech",
    colors: {
      primary: "210 80% 25%",
      secondary: "195 70% 35%",
      accent: "45 95% 60%",
      background: "210 15% 96%"
    }
  },
  {
    name: "Warm Minimal",
    id: "minimal",
    colors: {
      primary: "30 10% 20%",
      secondary: "20 15% 35%",
      accent: "15 80% 60%",
      background: "30 20% 98%"
    }
  }
];

const DefaultLayout = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <RolesSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

const layouts = [
  { id: "default", name: "Professional", icon: Layout, component: DefaultLayout },
  { id: "modern", name: "Modern", icon: Grid, component: ModernLayout },
  { id: "minimal", name: "Minimal", icon: Minimize2, component: MinimalLayout }
];

const Index = () => {
  const [activeLayout, setActiveLayout] = useState("default");
  const [activeTheme, setActiveTheme] = useState("professional");

  const applyTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    setActiveTheme(theme.id);
  };

  const ActiveComponent = layouts.find(l => l.id === activeLayout)?.component || DefaultLayout;

  return (
    <>
      {/* Theme Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">Design Themes</span>
        </div>
        <div className="space-y-2">
          {themes.map((theme) => (
            <Button
              key={theme.id}
              variant={activeTheme === theme.id ? "default" : "outline"}
              size="sm"
              onClick={() => applyTheme(theme)}
              className="w-full text-xs"
            >
              {theme.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Layout Selector */}
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Layout className="w-4 h-4" />
          <span className="text-sm font-medium">Layout Styles</span>
        </div>
        <div className="space-y-2">
          {layouts.map((layout) => {
            const Icon = layout.icon;
            return (
              <Button
                key={layout.id}
                variant={activeLayout === layout.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLayout(layout.id)}
                className="w-full text-xs flex items-center gap-2"
              >
                <Icon className="w-3 h-3" />
                {layout.name}
              </Button>
            );
          })}
        </div>
      </div>
      
      <ActiveComponent />
    </>
  );
};

export default Index;
