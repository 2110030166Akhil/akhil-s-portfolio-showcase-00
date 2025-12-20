import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-cyber text-neon-cyan font-display text-xs uppercase tracking-widest mb-4">
            // Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's{" "}
            <span className="text-gradient-cyber">work together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm currently available for freelance work and full-time opportunities.
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto perspective-1000">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-3d">
              <div className="card-3d-inner glass-cyber p-8">
                <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                  <Sparkles className="text-neon-cyan" size={20} />
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "palukuriakhil1@gmail.com", href: "mailto:palukuriakhil1@gmail.com" },
                    { icon: MapPin, label: "Location", value: "Available Remotely", href: null },
                    { icon: Phone, label: "Phone", value: "Available upon request", href: null },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href || undefined}
                      className={`flex items-center gap-4 group ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:glow-primary transition-all duration-300">
                        <item.icon className="text-neon-cyan" size={22} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-display">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-neon-cyan transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-3d">
              <div className="card-3d-inner glass-cyber p-8">
                <h3 className="text-lg font-display font-bold mb-6">Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/akhil-palukuri-b6a147227", color: "neon-cyan" },
                    { icon: Github, label: "GitHub", href: "https://github.com/2110030166Akhil", color: "neon-purple" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 py-4 rounded-xl bg-muted/50 hover:bg-${social.color}/10 text-muted-foreground hover:text-${social.color} border border-transparent hover:border-${social.color}/30 transition-all duration-300 group`}
                    >
                      <social.icon size={20} />
                      <span className="font-display font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with 3D */}
          <div className="card-3d">
            <div className="card-3d-inner glass-cyber p-8">
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                <Send className="text-neon-purple" size={20} />
                Send a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-display font-medium mb-2 text-muted-foreground group-focus-within:text-neon-cyan transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-display font-medium mb-2 text-muted-foreground group-focus-within:text-neon-cyan transition-colors">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-display font-medium mb-2 text-muted-foreground group-focus-within:text-neon-cyan transition-colors">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-cyber text-foreground flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
