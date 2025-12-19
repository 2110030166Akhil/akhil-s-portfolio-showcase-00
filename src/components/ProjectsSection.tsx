import { ExternalLink, Github, Folder } from "lucide-react";

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
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-500 hover:glow-primary"
            >
              {/* Project number */}
              <span className="text-6xl font-bold text-primary/10 absolute top-4 right-6 group-hover:text-primary/20 transition-colors">
                0{index + 1}
              </span>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-primary"
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
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="text-primary" size={32} />
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
