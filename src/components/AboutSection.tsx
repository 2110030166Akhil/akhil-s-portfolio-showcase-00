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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Get to know <span className="gradient-text">me better</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-medium">Software Developer</span> with 
              a strong foundation in building modern web applications. Currently focused on 
              full-stack development, I love creating seamless digital experiences that make 
              a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep commitment 
              to continuous learning. I specialize in <span className="text-primary">Angular JS</span>, 
              <span className="text-primary"> Java Spring Boot </span> , modern JavaScript ecosystems and strong  <span className="text-primary">React JS</span> foundation
              always staying up-to-date with industry trends.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source, or sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div>
                <h3 className="text-3xl font-bold gradient-text">5+</h3>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold gradient-text">10+</h3>
                <p className="text-muted-foreground text-sm">Technologies</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold gradient-text">100%</h3>
                <p className="text-muted-foreground text-sm">Dedication</p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary group ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
