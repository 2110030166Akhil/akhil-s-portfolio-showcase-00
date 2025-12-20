import { Heart, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/50 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-neon-cyan/10 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border-neon flex items-center justify-center">
              <Zap className="text-neon-cyan" size={16} />
            </div>
            <span className="font-display font-bold text-gradient-cyber">Akhil Palukuri</span>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm font-medium">
            © {currentYear} All rights reserved.
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            Built with 
            <Heart className="text-neon-pink mx-1 animate-pulse" size={14} fill="currentColor" /> 
            using 
            <span className="text-neon-cyan font-medium">React</span> 
            & 
            <span className="text-neon-purple font-medium">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
