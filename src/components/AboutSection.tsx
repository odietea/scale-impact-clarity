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
            <p className="text-lg leading-relaxed text-foreground mb-8">Tired of complex problems with no clear solutions? I design and build systems that deliver real, measurable impact. With over a decade of experience in Fintech, Civic Tech, Food Tech, Consumer Tech, Startup Ecosystem and Climate Tech, I thrive in the "messy middle", where challenges are complex and expectations are high. I specialize in turning ambiguity into actionable strategies, leading CX transformations, automating workflows, and building products that empower thousands.</p>

            <div className="bg-surface rounded-lg p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-6">Why Work With Me</h3>
              <div className="space-y-6 text-foreground">
                
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Turn Chaos into Clarity:</strong> I'm adept at cutting through complexity to define clear, effective strategies where others see only ambiguity.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Drive Measurable Transformation:</strong> My expertise lies in delivering real results—automating critical processes, leading impactful CX transformations, and launching products that truly make a difference.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Build Future-Proof Systems:</strong> I design with a holistic, long-term perspective, ensuring solutions are robust, scalable, and adaptable to future needs.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Lead with Customer-Centricity:</strong> With every project, I embed deep user understanding and empathy to create solutions that genuinely resonate and get adopted.
                  </p>
                  
                  <p className="leading-relaxed">
                    <strong className="text-secondary">Go Beyond the Brief:</strong> My commitment is to consistently over-deliver, bringing a proactive, results-oriented approach to every challenge, no matter how high the stakes.
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