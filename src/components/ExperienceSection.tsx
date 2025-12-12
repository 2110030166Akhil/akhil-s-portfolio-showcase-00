import { ExternalLink, Folder } from "lucide-react";
const experience = [
    {
        title: "Software Developer at Proficon Labs",
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
        title: "Front End Developer Intern at Proficom Labs",
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
                <div className="text-center">
                    <span className="text-primary font-mono text-sm">// Experience</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        My <span className="gradient-text">Work Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    <div className="mt-8 flex flex-col justify-center items-center">
                        {experience.map((exp, index) => (
                            <div className="glass-card p-8 group hover:border-primary/50 transition-all duration-500 hover:glow-primary mb-8 w-max">
                                <div>
                                    <h3 className="text-2xl font-semibold mt-4 mb-2 text-left">
                                        {exp.title}
                                    </h3>
                                </div>
                                <ul className="text-muted-foreground mt-2 mb-4 text-left">
                                    {exp.description.map((desc, i) => (
                                        <div key={i} className="mb-2"> {i + 1}. {desc}</div>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
export default ExperienceSection;