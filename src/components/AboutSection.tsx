import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
    color: "neon-cyan",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
    color: "neon-purple",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt and master new technologies",
    color: "neon-pink",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication",
    color: "neon-orange",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyber text-neon-cyan font-display text-xs uppercase tracking-widest mb-4">
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get to know{" "}
            <span className="text-gradient-cyber">me better</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6 perspective-1000">
            <div className="card-3d">
              <div className="card-3d-inner glass-cyber p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-neon-cyan font-semibold">Software Developer</span> with 
                  a strong foundation in building modern web applications. Currently focused on 
                  full-stack development, I love creating seamless digital experiences that make 
                  a real impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in tech started with curiosity and has evolved into a deep commitment 
                  to continuous learning. I specialize in <span className="text-neon-purple font-semibold">Angular JS</span>, 
                  <span className="text-neon-pink font-semibold"> Java Spring Boot</span>, modern JavaScript ecosystems and strong 
                  <span className="text-neon-cyan font-semibold"> React JS</span> foundation—always staying up-to-date with industry trends.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Stats with 3D effect */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5+", label: "Projects Completed" },
                { value: "10+", label: "Technologies" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="card-3d group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-3d-inner glass-cyber p-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-display font-black text-gradient-cyber mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Cards with 3D */}
          <div className="grid grid-cols-2 gap-5 perspective-1000">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`card-3d group ${index % 2 === 1 ? "mt-8" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card-3d-inner glass-cyber p-6 h-full">
                  <div 
                    className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-5 group-hover:animate-pulse transition-all duration-300`}
                  >
                    <item.icon className={`text-${item.color}`} size={28} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
