import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Building Scalable Web Apps", "Crafting Beautiful UIs", "Delivering Great Experiences"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 50;

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? role.slice(0, displayText.length - 1) : role.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Soft gradient orbs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-soft animation-delay-300" />
      
      {/* Decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float animation-delay-400" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="opacity-0 animate-fade-up">
              <span className="section-badge inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 opacity-0 animate-fade-up animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Hi, my name is{" "}
                <span className="gradient-text">Akhil Palukuri</span>
                <span className="inline-block ml-2 animate-[wave_2s_ease-in-out_infinite]">👋</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                I specialize in:
              </p>
              <div className="h-10 flex items-center">
                <span className="text-xl md:text-2xl font-semibold text-primary">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-[blink_1s_infinite]" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-up animation-delay-200">
              I'm a Software Developer specializing in building responsive web applications 
              and delivering exceptional user experiences. 💻
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 justify-center">
                View my work
                <ChevronDown size={18} className="rotate-[-90deg]" />
              </a>
              <a href="#about" className="btn-outline inline-flex items-center gap-2 justify-center">
                About me
                <ChevronDown size={18} className="rotate-[-90deg]" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 opacity-0 animate-fade-up animation-delay-400">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/akhil-palukuri-b6a147227", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/2110030166Akhi", label: "GitHub" },
                { icon: Mail, href: "mailto:palukuriakhil1@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-300 text-muted-foreground hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Floating Cards */}
          <div className="hidden lg:block relative">
            <div className="space-y-6">
              {[
                { title: "Frontend Development", subtitle: "Angular | React | TypeScript", delay: "0" },
                { title: "Backend Services", subtitle: "Java | Spring Boot | REST APIs", delay: "100" },
                { title: "Database Management", subtitle: "MongoDB | SQL | Firebase", delay: "200" },
                { title: "Version Control", subtitle: "Git | GitHub | CI/CD", delay: "300" },
              ].map((card, index) => (
                <div
                  key={card.title}
                  className={`float-card opacity-0 animate-slide-in-right`}
                  style={{ 
                    animationDelay: `${400 + index * 100}ms`,
                    marginLeft: `${index * 20}px`
                  }}
                >
                  <h3 className="font-display font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;