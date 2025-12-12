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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// My Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card p-5 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs" , "Swagger" , "Firebase", "Figma", "CI/CD", "Agile/Scrum" , "DSA" , "C" , "Python" ].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {skill}
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
