import { CheckCircle, Target, Cog, Leaf } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Strategy & Execution",
      skills: [
        "Program & Project Leadership",
        "Cross-functional Teaming",
        "Operational Optimization",
        "Business Process Reengineering",
        "Agile Project Management",
        "Stakeholder Prioritization"
      ]
    },
    {
      icon: <Cog className="w-8 h-8 text-secondary" />,
      title: "CX & Digital Ops",
      skills: [
        "Process Automation (Internal & CX)",
        "Conversational AI (Intercom)",
        "API-Driven Support Flows",
        "Product Onboarding Flows",
        "Internal Knowledge Systems",
        "Jira, Trello, Google Workspace"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: "Sustainability & Impact",
      skills: [
        "ESG Strategy & Reporting",
        "Circular Economy Models",
        "Decarbonization Programs",
        "Green Job Creation",
        "Carbon & Plastic Credit Models",
        "Business Cases for Circular Economy Hubs"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Core Skills
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building impactful systems across strategy, operations, and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-surface rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;