import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Recycle, BarChart3, Shield, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI-Powered Support Bot",
      company: "Flutterwave",
      description: "Automated 35% of all support tickets with a custom Intercom chatbot. Designed data-backed resolution flows, built API integrations, and created logic-based conversations for remittance users. Reduced SLA breaches by 60% and enabled team restructuring.",
      impact: "35% automation, 60% SLA improvement",
      tags: ["AI/ML", "Process Automation", "Customer Experience"]
    },
    {
      icon: <Recycle className="w-8 h-8 text-secondary" />,
      title: "Circular Economy Engine",
      company: "Atunlo",
      description: "Led ESG programs across 6 states that recycled 200M+ plastic bottles and created 10,000+ green jobs. Built waste-to-value incentive systems, real-time performance dashboards, and secured partnerships with banks and government.",
      impact: "200M+ bottles recycled, 10,000+ jobs created",
      tags: ["ESG", "Sustainability", "Program Management"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Hernalytics",
      company: "Civic Tech",
      description: "Built a real-time election performance tracker to monitor participation, demographics, and winning party analytics for civic engagement.",
      impact: "Real-time election monitoring",
      tags: ["Civic Tech", "Data Analytics", "Democracy"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Gateway Shield",
      company: "Civic Tech",
      description: "Developed a civic-tech platform for citizens to log crime incidents. Designed police-side dashboards and resolution workflows with SLA escalation and audit trail features.",
      impact: "Enhanced police accountability",
      tags: ["Civic Tech", "Public Safety", "Transparency"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Omora",
      company: "Fintech",
      description: "Created an AI-powered investment platform for HNWIs. Integrated sentiment-based triggers, DCA-only investing, whale tracking, and a USDT/Naira wallet system.",
      impact: "AI-driven investment automation",
      tags: ["Fintech", "AI/ML", "Investment Tech"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Signature Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative initiatives across fintech, sustainability, and civic tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-surface rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-all hover:border-accent/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-muted rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-secondary font-medium">{project.company}</p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  {project.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;