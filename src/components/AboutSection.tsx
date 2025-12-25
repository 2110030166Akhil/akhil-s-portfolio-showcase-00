import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt and master new technologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            I'm a Software Developer specializing in{" "}
            <span className="gradient-text">scalable systems</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass-card p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in <span className="text-primary font-medium">Angular</span>, 
                <span className="text-primary font-medium"> Java Spring Boot</span>, and modern JavaScript ecosystems, 
                I've built robust applications that handle real-world challenges efficiently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="font-medium text-foreground">Proficon Labs</span>, I developed responsive web applications 
                using Angular, integrated RESTful APIs with Java Spring Boot, and worked with MongoDB for data management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical excellence with a focus on business impact, 
                creating solutions that not only perform well but solve real problems effectively.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Angular", "React", "TypeScript", "JavaScript", "Java/Spring Boot", "MongoDB", "Git", "REST APIs", "HTML/CSS"].map(
                  (tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5+", label: "Projects" },
                { value: "10+", label: "Technologies" },
                { value: "1+", label: "Years Exp" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 glass-card">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 ${index % 2 === 1 ? "mt-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;