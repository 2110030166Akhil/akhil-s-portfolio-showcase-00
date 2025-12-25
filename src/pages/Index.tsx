import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
      {/* Animated background orbs */}
      {/* <div className="parallax-orb w-[600px] h-[600px] bg-neon-purple/20 top-0 -left-40" />
      <div className="parallax-orb w-[500px] h-[500px] bg-neon-cyan/15 top-1/3 -right-20 animation-delay-200" />
      <div className="parallax-orb w-[400px] h-[400px] bg-neon-pink/10 bottom-1/4 left-1/4 animation-delay-400" /> */}
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
