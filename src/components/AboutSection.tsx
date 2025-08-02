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
            <p className="text-lg leading-relaxed text-foreground mb-8">Tired of complex problems with no clear solutions? I design and build systems that deliver real, measurable impact.


With over a decade of experience in Fintech, Civic Tech, Food Tech, and Sustainability, I thrive in the "messy middle"—where challenges are complex and expectations are high. I specialize in turning ambiguity into actionable strategies, leading CX transformations, automating workflows, and building products that empower thousands.</p>

            <div className="bg-surface rounded-lg p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-6">Why Work With Me</h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  <strong className="text-secondary">I build systems that work — and last.</strong> Whether it's scaling a circular economy engine across six states, designing an AI chatbot that resolves 35% of customer issues, or launching a civic-tech tool for police accountability, I bring structure to ambiguity and empathy to every interaction.
                </p>
                
                <p className="leading-relaxed">
                  I don't just manage projects; I align people, processes, and product to unlock sustainable growth. My superpower is translating complexity into clarity — for teams, users, and partners alike.
                </p>
                
                <p className="leading-relaxed">
                  I thrive in fast-moving environments, adapt quickly, and build with impact in mind. If you're solving hard problems that require systems thinking, smart execution, and human-centered design — I'd love to collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;