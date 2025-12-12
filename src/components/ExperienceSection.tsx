import { Briefcase } from "lucide-react";

const experience = [
    {
        title: "Software Developer",
        company: "Proficon Labs",
        period: "2023 - Present",
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
        company: "Proficom Labs",
        period: "2022 - 2023",
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
        <section id="experience" className="py-16 relative">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-primary font-mono text-sm">// Experience</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        My <span className="gradient-text">Work Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50 z-10" />
                            
                            {/* Content card */}
                            <div className={`ml-8 md:ml-0 md:w-1/2 ${
                                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                            }`}>
                                <div className="glass-card p-6 group hover:border-primary/50 transition-all duration-500 hover:glow-primary">
                                    {/* Period badge */}
                                    <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                                        {exp.period}
                                    </span>
                                    
                                    {/* Icon and title */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                                            <p className="text-primary text-sm">{exp.company}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Description */}
                                    <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
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