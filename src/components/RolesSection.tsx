import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const RolesSection = () => {
  const roles = [
    "Consulting (CX, Strategy, Sustainability)",
    "Chief Operating Officer (COO)",
    "Director/VP, Program or Product Ops",
    "Head of Customer Experience or Automation",
    "ESG/Sustainability Strategy Lead",
    "Managing Director (Social Enterprise / Climate-Tech)",
    "Innovation Lab or Accelerator Director",
    "Strategic Advisor / Board Member"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Roles I'm Open To
            </h2>
          </div>
          
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring systems thinking and operational excellence to your organization
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {roles.map((role, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default"
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;