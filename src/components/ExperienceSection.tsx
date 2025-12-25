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
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Experience</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            My{" "}
            <span className="gradient-text">Work Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experience.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
              </div>
              
              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'
              }`}>
                <div className="glass-card p-6">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  
                  {/* Icon and title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-accent text-primary">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold">{exp.title}</h3>
                      <p className="text-primary text-sm font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
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