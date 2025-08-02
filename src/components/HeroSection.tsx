import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";
const HeroSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:odieteanita@gmail.com";
  };
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/anitaogbonna", "_blank");
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Building Systems That{" "}
                <span className="text-secondary">Scale Impact</span>,{" "}
                <span className="text-accent">Empower People</span>, and{" "}
                <span className="text-secondary">Streamline Operations</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Program & Product Leader | CX Automation Expert | Sustainability Advocate | Operator at Scale
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleEmailClick} className="bg-primary hover:bg-primary-light text-primary-foreground flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Let's work together
              </Button>
              
              <Button size="lg" variant="outline" onClick={handleCalendlyClick} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule a call
              </Button>
            </div>

            <div className="pt-4">
              
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <img src={professionalHeadshot} alt="Anita Ogbonna - Professional Headshot" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;