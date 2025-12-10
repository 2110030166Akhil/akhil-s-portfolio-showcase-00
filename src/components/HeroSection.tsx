import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-float animation-delay-300" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-mono mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-up animation-delay-100">
            Hi, I'm{" "}
            <span className="gradient-text">Akhil Palukuri</span>
          </h1>

          {/* Title */}
          <div className="opacity-0 animate-fade-up animation-delay-200">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              <span className="text-foreground font-medium">Software Developer</span>{" "}
              crafting digital experiences
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl text-lg mb-10 opacity-0 animate-fade-up animation-delay-300">
            Passionate about building scalable web applications and creating
            seamless user experiences. I turn ideas into elegant, functional code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg glass-card border-primary/50 text-foreground font-semibold hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="https://linkedin.com/in/akhil-palukuri-b6a147227"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:akhil@example.com"
              className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
