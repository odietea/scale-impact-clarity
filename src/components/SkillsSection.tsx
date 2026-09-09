import { CheckCircle, Target, Cog, Leaf } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Product & Systems Design",
      skills: [
        "0→1 Product Development (PRDs, User Flows, UX Writing)",
        "Role-Based Permission & Governance Design",
        "SLA, Escalation & Compliance Logic",
        "Provider Monitoring & API Reliability",
        "Analytics Event Taxonomies",
        "AI Guardrails & Sentiment Systems"
      ]
    },
    {
      icon: <Cog className="w-8 h-8 text-secondary" />,
      title: "CX & Operations at Scale",
      skills: [
        "CX Transformation & Service Standards",
        "Support Automation & AI-Driven Resolution",
        "Lifecycle Communications & Onboarding",
        "Operational Playbooks & Escalation Frameworks",
        "Cross-Functional Program Delivery",
        "Large-Scale Event & Conference Operations"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-accent" />,
      title: "Sustainability & Impact",
      skills: [
        "Circular Economy Business Models",
        "ESG Strategy & Impact Measurement",
        "Green Finance & Incentive Design",
        "Corporate Decarbonisation Programs",
        "Government & Institutional Partnerships",
        "Carbon & Plastic Credit Models"
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
             What I bring to the table across product, operations, and sustainability.
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