import { Button } from "@/components/ui/button";
import { Mail, Calendar, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:odieteanita@gmail.com";
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/odieteanita/30min", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/anitaodiete/", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl leading-relaxed mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you're scaling operations, implementing ESG initiatives, or building customer-centric systems, I'd love to explore how we can work together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-light rounded-lg p-8 text-left">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-primary-foreground/80 mb-4">
                Drop me a line for project inquiries, collaborations, or just to say hello.
              </p>
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                odieteanita@gmail.com
              </Button>
            </div>

            <div className="bg-primary-light rounded-lg p-8 text-left">
              <Calendar className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
              <p className="text-primary-foreground/80 mb-4">
                Book a consultation to discuss your project needs and explore opportunities.
              </p>
              <Button
                onClick={handleCalendlyClick}
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book via Calendly
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Remote & Global</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 bg-accent rounded-full"></div>
            
            <button
              onClick={handleLinkedInClick}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;