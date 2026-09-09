import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Recycle, BarChart3, Shield, TrendingUp, Building, Truck, Users, HeartPulse, Lightbulb, GraduationCap, Rocket } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<'product' | 'sustainability' | 'innovation'>('product');
  const productProjects = [
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: "Connected Wellness App",
      company: "Bèbèdí",
      linkUrl: "https://www.bebedi.com/",
      description: "Joined at the earliest stage of a women's-health wearable and built the product operating system from the ground up from experience principles to PRDs, UX writing, onboarding logic, analytics events, and an AI-guardrail framework defining the line between insight and overreach. ",
      impact: "Hardware concept → build-ready digital ecosystem",
      tags: ["Hardware concept", "Build-Ready Digital Ecosystem", "FemTech"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Crypto Investment Platform",
      company: "Omora",
      description: "Selected to lead product specifically for having a non-expert's relationship to crypto. Built a jargon-free, Naira-funded DCA investment platform for HNIs with AI sentiment-based auto-pause protection and maker-checker controls for corporate clients. Designed the full admin dashboard with 8 staff roles and scoped permissions, live provider-health monitoring, transaction monitoring, and compliance tooling.",
      impact: "Jargon-free investing, 8-role operations system",
      tags: ["Fintech", "AI/ML", "RegTech Compliance"]
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Community Protection Platform",
      company: "Gateway Shield",
      description: "Directed the build of a role-based civic-safety platform. Owned the PRDs, user flows, and UX writing across every screen for both sides: citizen reporting (web, mobile, IVR, anonymous submission) and the police command chain (triage, station assignment, SLA escalation, audit-logged closure) across 8 distinct user roles.",
      impact: "8 roles, SLA-driven case resolution",
      tags: ["Civic Tech", "Public Safety", "Role-Based Design"]
    },
    {
      icon: <Bot className="w-8 h-8 text-accent" />,
      title: "AI-Powered Support",
      company: "Flutterwave",
      description: "Built and deployed a conversational AI bot on Intercom that automated over 150 internal workflows across verification, transaction, and account-related issues. The bot resolved 35% of support requests end-to-end, reducing first response time by 60%.",
      impact: "35% automation, 60% faster response",
      tags: ["AI/ML", "Process Automation", "Customer Experience"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Election Monitoring",
      company: "Hernalytics",
      description: "Built a real-time election performance tracker to monitor participation, demographics, and winning party analytics for civic engagement.",
      impact: "Real-time election monitoring",
      tags: ["Civic Tech", "Data Analytics", "Democracy"]
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "B2B Food Tech Platform ",
      company: "Frostflow Foods",
      description: "Led product development for an e-commerce platform connecting restaurants and other businesses to order directly from premium suppliers. Designed order management logic, payment flow, and automated reconciliation workflows that reduced manual errors by 80%.",
      impact: "80% reduction in manual errors",
      tags: ["B2B Platform", "FoodTech", "Supply Chain"]
    }
  ];

  const sustainabilityProjects = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Lagos Waste Bazaar",
      company: "Lagos State OCCCE",
      description: "Planned and executed operations for Lagos State's first Waste Bazaar in Badagry. The event incentivized sustainable behavior by offering cash, food, and health services to over 500 residents in exchange for recyclables.",
      impact: "500+ residents engaged",
      tags: ["Civic Engagement", "Sustainability", "Event Operations"]
    },
    {
      icon: <Building className="w-8 h-8 text-secondary" />,
      title: "Circular Economy Blueprint",
      company: "Edo State Government",
      description: "Designed a scalable Recycling Village model for Edo State, integrating waste-to-energy, green manufacturing, and ESG-aligned governance. Developed the full business case, PPP model, and investment roadmap for green jobs and carbon reduction.",
      impact: "Full state circular economy model",
      tags: ["Government", "ESG", "Strategic Planning"]
    },
    {
      icon: <Recycle className="w-8 h-8 text-accent" />,
      title: "Circular Economy Engine",
      company: "Atunlo",
      description: "Led ESG programs across 6 states that recycled 200M+ plastic bottles and created 10,000+ green jobs. Built waste-to-value incentive systems, real-time performance dashboards, and secured partnerships with banks and government.",
      impact: "200M+ bottles recycled, 10,000+ jobs created",
      tags: ["ESG", "Sustainability", "Program Management"]
    }
  ];

  const innovationProjects = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Corporate Hackathon",
      company: "Access Bank",
      description: "Spearheaded the bank's first internal hackathon, guiding 100 employees from problem statement to MVP. Also designed a 3-day logistics-focused hackathon projected to save Unilever $350K annually.",
      impact: "$350K projected annual savings",
      tags: ["Innovation", "Corporate Training", "Process Optimization"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      title: "Green Club Network",
      company: "Atunlo",
      description: "Established sustainability clubs for kids and youths across 6 states, combining monthly training, practical eco-projects, waste-to-education and educational scholarships.",
      impact: "Multi-state youth sustainability network",
      tags: ["Education", "Youth Development", "Sustainability"]
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Innovation Hub",
      company: "Atunlo",
      description: "Designed and launched a circular economy accelerator to incubate scalable green solutions and prepare them for investment.",
      impact: "Green solutions accelerator",
      tags: ["Accelerator", "Green Tech", "Investment Readiness"]
    }
  ];

  const tabs = [
    { id: 'product', label: 'Product & Platform Development', projects: productProjects },
    { id: 'sustainability', label: 'Sustainability & Government Advisory', projects: sustainabilityProjects },
    { id: 'innovation', label: 'Innovation Programs & Ecosystem Building', projects: innovationProjects }
  ] as const;

  const renderProjectGrid = (projects: typeof productProjects) => (
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
  );

  return (
    <section id="projects" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Signature Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to implementation: Signature projects demonstrating product leadership, operational clarity, and measurable value
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-surface border border-border text-foreground hover:bg-muted hover:border-accent/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="min-h-[400px]">
          {renderProjectGrid(tabs.find(tab => tab.id === activeTab)?.projects || [])}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;