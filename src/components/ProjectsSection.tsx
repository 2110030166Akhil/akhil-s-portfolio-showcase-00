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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">My Work</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="glass-card p-8 group relative overflow-hidden">
              {/* Featured badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold">
                <Star size={12} className="fill-current" />
                Featured
              </div>

              {/* Project number */}
              <span className="absolute -top-6 -left-2 text-[100px] font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                0{index + 1}
              </span>

              <div className="relative pt-6">
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-primary"
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
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-display font-bold mb-8 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.title} className="glass-card p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-accent text-primary">
                  <Folder size={24} />
                </div>
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
              <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-primary font-medium">
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
