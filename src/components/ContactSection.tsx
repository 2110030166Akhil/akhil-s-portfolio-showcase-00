import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
            Let's{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently available for freelance work and full-time opportunities.
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-lg font-display font-semibold mb-6">Get in touch</h3>
              
              <div className="space-y-5">
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
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-display font-semibold mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/akhil-palukuri-b6a147227" },
                  { icon: Github, label: "GitHub", href: "https://github.com/2110030166Akhil" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-xl bg-accent hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Send className="text-primary" size={20} />
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
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
    </section>
  );
};

export default ContactSection;