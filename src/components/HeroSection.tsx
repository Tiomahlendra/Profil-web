import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Information Systems Student | Athlete | Entrepreneur
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              <span className="text-gradient">Afif Alfarisi</span>{" "}
              Hernas
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              Halo! Saya mahasiswa Sistem Informasi di <strong className="text-foreground">UIN Suska Riau</strong>. 
              Saya berasal dari Bangkinang, Kampar, tempat yang membentuk kedisiplinan saya. 
              Visi saya adalah menjadi profesional IT yang tetap berprestasi di dunia olahraga dan bisnis.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-sm tracking-wide hover:opacity-90 transition-opacity glow-accent"
              >
                Hubungi Saya
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-3.5 rounded-lg border border-border text-foreground font-heading font-medium text-sm tracking-wide hover:border-primary/50 transition-colors"
              >
                Tentang Saya
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[420px] h-[420px] mx-auto">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
              <img
                src={heroImg}
                alt="Afif Alfarisi Hernas"
                className="relative w-full h-full object-cover object-top rounded-3xl border border-border/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
