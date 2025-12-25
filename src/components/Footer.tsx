import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="font-display font-bold text-primary">Akhil Palukuri</span>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved.
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            Built with 
            <Heart className="text-primary mx-1" size={14} fill="currentColor" /> 
            using 
            <span className="text-primary font-medium">React</span> 
            & 
            <span className="text-primary font-medium">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;