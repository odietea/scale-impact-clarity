const Footer = () => {
  return <footer className="bg-primary-light text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-primary-foreground/80">© 2024 Anita Odiete. Building systems that scale impact.</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <a href="mailto:odieteanita@gmail.com" className="hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://calendly.com/anitaogbonna" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Calendly
            </a>
            <a href="https://linkedin.com/in/anitaogbonna" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;