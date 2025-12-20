const skills = [
  { name: "Angular JS", level: 95, category: "Frontend" },
  { name: "React JS", level: 50, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 90, category: "Frontend" },
  { name: "Java Spring Boot", level: 80, category: "Backend" },
  { name: "MongoDB", level: 78, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "AWS", level: 60, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Tools"];

const categoryColors = {
  Frontend: "neon-cyan",
  Backend: "neon-purple", 
  Tools: "neon-pink",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-neon-cyan/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyber text-neon-cyan font-display text-xs uppercase tracking-widest mb-4">
            // My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technologies I{" "}
            <span className="text-gradient-cyber">work with</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full" />
        </div>

        {/* Skills by category */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full bg-${categoryColors[category as keyof typeof categoryColors]} animate-pulse`} />
                {category}
                <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 perspective-1000">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="card-3d group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="card-3d-inner glass-cyber p-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold group-hover:text-neon-cyan transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-display font-bold text-${categoryColors[category as keyof typeof categoryColors]}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-${categoryColors[category as keyof typeof categoryColors]} to-${categoryColors[category as keyof typeof categoryColors]}/50 transition-all duration-1000 ease-out relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-text-shimmer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-20">
          <h3 className="text-xl font-display font-bold mb-8 text-center">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Swagger", "Firebase", "Figma", "CI/CD", "Agile/Scrum", "DSA", "C", "Python"].map(
              (skill, index) => (
                <span
                  key={skill}
                  className="card-3d group cursor-default"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <span className="card-3d-inner inline-block px-5 py-2.5 rounded-full glass-cyber text-sm text-muted-foreground group-hover:text-neon-cyan font-medium transition-all duration-300">
                    {skill}
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
