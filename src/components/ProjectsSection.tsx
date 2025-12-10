import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, and secure payment integration using Stripe.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio with smooth animations and dark theme.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "A content management system with markdown support and SEO optimization.",
    tags: ["Next.js", "MDX", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with WebSocket connections and message encryption.",
    tags: ["React", "Socket.io", "Node.js"],
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
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
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
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                  </a>
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
