import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    title: "Software Developer",
    company: "Proficon Labs",
    period: "July 2025 - Present",
    description: [
      "Developed and maintained responsive web applications using Angular, JavaScript, HTML, and CSS.",
      "Integrated RESTful APIs built with Java Spring Boot and documented using Swagger.",
      "Worked with MongoDB for data storage and retrieval.",
      "Utilized Git for version control and team collaboration.",
      "Contributed to designing reusable UI components and improving front-end performance.",
      "Gained hands-on experience with React for modular component development."
    ]
  },
  {
    title: "Front End Developer Intern",
    company: "Proficon Labs",
    period: "July 2024 - July 2025",
    description: [
      "Assisted in building and styling responsive UIs using Angular, JavaScript, HTML, and CSS.",
      "Collaborated with developers to integrate frontend components with REST APIs.",
      "Supported testing, debugging, and UI improvements across multiple devices.",
      "Worked with Git for version control and contributed to team-based projects.",
      "Developed an understanding of component-based architecture and modern web design practices."
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyber text-neon-cyan font-display text-xs uppercase tracking-widest mb-4">
            // Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My{" "}
            <span className="text-gradient-cyber">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto perspective-1000">
          {/* Timeline line with glow */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink rounded-full blur-sm" />
          </div>

          {experience.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot with pulse */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="w-5 h-5 bg-neon-cyan rounded-full border-4 border-background" />
                  <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-30" />
                </div>
              </div>
              
              {/* Content card with 3D */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
              }`}>
                <div 
                  className="card-3d group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="card-3d-inner glass-cyber p-8">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <Calendar size={14} className="text-neon-cyan" />
                      <span className="text-xs font-display font-bold text-neon-cyan uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-neon-purple/20 text-neon-purple group-hover:animate-pulse">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold group-hover:text-neon-cyan transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-neon-purple font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="text-muted-foreground space-y-3 text-sm">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 group-hover/item:animate-pulse" />
                          <span className="group-hover/item:text-foreground transition-colors">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
