const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-8">
              I'm a multidisciplinary leader with 10+ years of experience scaling high-impact initiatives across fintech, sustainability, and innovation. I build systems that work — from self-service automation to multi-state ESG programs. Whether I'm deploying a chatbot that handles 35% of support tickets or creating circular economy models that empower 10,000+ people, I lead with clarity, empathy, and data.
            </p>

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
    </section>
  );
};

export default AboutSection;