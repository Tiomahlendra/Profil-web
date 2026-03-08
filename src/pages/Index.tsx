import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <footer className="py-8 border-t border-border/50">
        <p className="text-center text-muted-foreground text-sm">
          © 2026 Afif Alfarisi Hernas. 
        </p>
      </footer>
    </div>
  );
};

export default Index;
