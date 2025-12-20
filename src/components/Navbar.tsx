import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-cyber py-3 border-b border-neon-cyan/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg border-neon flex items-center justify-center group-hover:glow-primary transition-all duration-300">
            <Zap className="text-neon-cyan" size={20} />
          </div>
          <span className="text-xl font-display font-bold text-gradient-cyber">AP</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-muted-foreground hover:text-neon-cyan transition-all duration-300 text-sm font-medium group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-neon-cyan group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 btn-cyber text-foreground text-xs py-2.5 px-5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg glass-cyber text-foreground hover:text-neon-cyan transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 glass-cyber p-6 transition-all duration-500 transform ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-3 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 btn-cyber text-foreground text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
