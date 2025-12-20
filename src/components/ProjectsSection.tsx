import { ExternalLink, Github, Folder, Star } from "lucide-react";

const projects = [
  {
    title: "Simpo.ai",
    description:
      "An all-in-one business platform powered by AI agents that handle sales follow-ups, marketing, planning, loyalty, and customer engagement. Features include Website Builder, CRM & Sales, E-Commerce, People Management, Work Management, and more. Trusted by over 3,000 businesses worldwide.",
    tags: ["Angular", "TypeScript", "AI Agents", "CRM", "E-Commerce"],
    github: "#",
    live: "https://simpo.ai/",
    featured: true,
  },
  {
    title: "Food Delivery Website",
    description:
      "A fully responsive food delivery web application with dynamic menu listings, cart management, and order placement with real-time updates through RESTful API integration. Features clean UI, reactive forms, routing, and component-based architecture.",
    tags: ["Angular", "TypeScript", "HTML", "CSS", "REST API"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Health Care Website",
    description:
      "A user-friendly health care website that allows users to find information about nearby COVID-19 vaccination centers by entering their location PIN code and preferred date. Uses Fetch API to retrieve real-time data from Government of India APIs.",
    tags: ["HTML", "CSS", "JavaScript", "Fetch API"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Spam or Ham Email Classification",
    description:
      "A machine learning model to classify emails as spam or ham. Performed data preprocessing, feature extraction, and model evaluation to achieve reliable classification accuracy.",
    tags: ["R", "Machine Learning", "Data Analysis"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Sentiment Analysis on Amazon Dataset",
    description:
      "Sentiment analysis on an Amazon product review dataset using natural language processing techniques and machine learning algorithms to analyze and classify customer sentiments.",
    tags: ["R", "NLP", "Machine Learning"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-neon-pink/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyber text-neon-cyan font-display text-xs uppercase tracking-widest mb-4">
            // My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured{" "}
            <span className="text-gradient-cyber">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full" />
        </div>

        {/* Featured Projects with 3D cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 perspective-1000">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="card-3d group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-3d-inner glass-cyber p-8 h-full relative overflow-hidden">
                {/* Featured badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-display">
                  <Star size={12} className="fill-current" />
                  Featured
                </div>

                {/* Project number with glow */}
                <span className="absolute -top-4 -left-2 text-[120px] font-display font-black text-neon-cyan/5 group-hover:text-neon-cyan/10 transition-colors duration-500 pointer-events-none">
                  0{index + 1}
                </span>

                <div className="relative pt-8">
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags with glow on hover */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-display rounded-lg bg-muted/50 text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan/50 hover:glow-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium group-hover/link:underline">Code</span>
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-muted-foreground hover:text-neon-purple transition-colors group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium group-hover/link:underline">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-display font-bold mb-10 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="card-3d group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-3d-inner glass-cyber p-6 h-full">
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan group-hover:animate-pulse">
                    <Folder size={28} />
                  </div>
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-neon-cyan transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-neon-purple transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg mb-3 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-neon-purple/80 font-display">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
