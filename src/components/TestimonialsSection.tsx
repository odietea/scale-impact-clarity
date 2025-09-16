import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "A year on, as of this morning at 08:24 AM on September 15, 2025, what began as a dynamic partnership has blossomed into a genuine friendship—swapping life updates amid the deadlines. Anita, you are the collaborator who elevates everyone. Your ability to navigate complex projects with ease is unmatched. If you're building something meaningful, partner with her. She's not just exceptional; she's essential. Proud to call you a friend and even prouder to recommend you without hesitation.",
      author: "[Author Name]",
      title: "[Author Title]"
    },
    {
      text: "Anita's range is truly unmatched. From building full product platforms for my ventures to mapping business strategy with ease, she's proven time and again that there's almost nothing she can't figure out and execute. She brings precision, creativity, and relentless focus to every project.",
      author: "Adetola E.",
      title: "CEO, Frostflow"
    },
    {
      text: "Working with Anita is a designer's dream. She writes user stories that actually make sense, anticipates user behavior like a mind-reader, and runs projects with incredible clarity. Out of every product manager I've collaborated with, Anita's still my favorite.",
      author: "Yinka A.",
      title: "Product Designer"
    },
    {
      text: "Anita's insights on ESG and sustainability are razor-sharp. I've had the pleasure of working with her on several opportunities, and what always strikes me is her range—she merges product thinking, policy knowledge, and business acumen effortlessly. Her ability to lead across disciplines is rare and refreshing.",
      author: "Omotayo D.",
      title: "ESG Advisor, Afreximbank"
    },
    {
      text: "Anita led our customer experience team with precision and empathy. She empowered us to take ownership, mentored us constantly, and went the extra mile to ensure our projects delivered real impact. Her technical skills, strategic mindset, and people-first leadership style made a huge difference to the team.",
      author: "Victor A.",
      title: "Product Manager, Flutterwave"
    },
    {
      text: "Anita is the kind of leader that simplifies the complex and motivates you to execute with confidence. Her sharp eye for process improvement, her ability to drive alignment across teams, and her commitment to CX excellence were key to everything we achieved. She's an impactful force—calm, smart, and inspiring.",
      author: "Timothy T-A.",
      title: "CX Analyst, Flutterwave"
    },
    {
      text: "Anita leads with purpose. Working under her showed me what strong, clear, strategic leadership looks like. She consistently inspired us to think bigger, move faster, and never lose sight of customer impact. Wherever Anita shows up, excellence follows.",
      author: "Ariyo A.",
      title: "Operations Associate, Flutterwave"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues, clients, and collaborators across industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-lg p-8 lg:p-12 border border-border shadow-sm relative">
            <Quote className="w-16 h-16 text-accent/20 absolute top-4 left-4" />
            
            <div className="relative z-10">
              <blockquote className="text-lg lg:text-xl leading-relaxed text-foreground mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary text-lg">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="border-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="border-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;