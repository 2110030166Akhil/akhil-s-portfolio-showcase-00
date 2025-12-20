import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
    >
      {/* Animated floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[120px] float-3d" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-purple/25 rounded-full blur-[100px] float-3d animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/15 rounded-full blur-[140px] morph-shape animation-delay-500" />
      
      {/* Cyber grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center preserve-3d">
          {/* Glowing badge */}
          <div className="opacity-0 animate-fade-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyber text-sm font-display text-neon-cyan animate-glow">
              <Sparkles size={16} className="animate-pulse" />
              Available for Opportunities
              <Sparkles size={16} className="animate-pulse" />
            </span>
          </div>

          {/* Name with 3D effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 opacity-0 animate-fade-up animation-delay-100 tracking-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-cyber inline-block hover:animate-glitch cursor-default">
              Akhil Palukuri
            </span>
          </h1>

          {/* Title with typing effect */}
          <div className="opacity-0 animate-fade-up animation-delay-200">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-sans mb-8">
              <span className="text-muted-foreground">a </span>
              <span className="text-neon-cyan font-semibold">Software Developer</span>
            </h2>
          </div>

          {/* Description with glow */}
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl mb-12 opacity-0 animate-fade-up animation-delay-300 leading-relaxed">
            Passionate about building{" "}
            <span className="text-neon-purple font-medium">scalable web applications</span> and delivering{" "}
            <span className="text-neon-pink font-medium">exceptional user experiences</span>. I turn concepts into elegant, functional digital solutions.
          </p>

          {/* CTA Buttons with 3D hover */}
          <div className="flex flex-col sm:flex-row gap-5 mb-14 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="#projects"
              className="btn-cyber text-foreground group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ChevronDown size={18} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border-neon font-display font-bold uppercase tracking-wider text-sm text-foreground hover:glow-accent transition-all duration-500 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links with 3D cards */}
          <div className="flex gap-5 opacity-0 animate-fade-up animation-delay-500">
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
                className="card-3d group"
                aria-label={social.label}
              >
                <div className="card-3d-inner p-4 rounded-xl glass-cyber text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  <social.icon size={24} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-neon-cyan transition-colors group">
            <span className="text-xs font-display uppercase tracking-widest mb-3">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
