const AboutSection = () => {
  return <section id="about" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-8">I build the systems that make ambitious ideas actually work. As a product and program leader, I've shaped experiences for millions of users across Fintech, Civic Tech, Food Tech, and Consumer Tech. As a founder, I took a climate-tech company from an unproven idea to ₦760M+ in year-two revenue. Either way, the work is the same: turn ambiguity into an operating system from the PRDs to permission structures, CX frameworks and compliance guardrails that let a product, a team, or a company run safely once it's no longer small.</p>

            <div className="bg-surface rounded-lg p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-6">Why Work With Me</h3>
              <div className="space-y-6 text-foreground">
                
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Own Outcomes, Not Just Deliverables:</strong> As Founder & CEO of Atunlo, I owned the P&L and grew revenue from ₦75M to ₦760M+ in year two. At Flutterwave, I owned CX outcomes (churn, resolution time, trust after outages) across 34+ markets and 1M+ users.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Turn Complexity into Clarity:</strong> From a hormone-tracking wearable to a crypto investment platform, I design for the person encountering it for the first time because if I can understand it, they will too.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Build Future-Proof Systems:</strong> Role-based permissions, SLA escalation logic, compliance guardrails, performance dashboards. I build the infrastructure that makes systems trustworthy at scale.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Move From Idea to Connected Teams:</strong> I've built teams from the founder's seat at Atunlo and from the product leader's seat at Omora and Gateway Shield.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Go Beyond the Brief:</strong> When an experience brief wasn't enough for a team to build from, I wrote the PRDs myself. When a beta process didn't exist, I built the framework. I notice what's missing and fix it without waiting to be asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;