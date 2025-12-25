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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">My Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
        </div>

        {/* Skills by category */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category}
                <span className="flex-1 h-px bg-border" />
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="glass-card p-5 group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out"
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
        <div className="mt-16 text-center">
          <h3 className="text-lg font-display font-semibold mb-6">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Swagger", "Firebase", "Figma", "CI/CD", "Agile/Scrum", "DSA", "C", "Python"].map(
              (skill) => (
                <span key={skill} className="skill-tag">
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