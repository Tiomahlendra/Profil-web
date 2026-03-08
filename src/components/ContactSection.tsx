import { motion } from "framer-motion";
import { Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">Kontak</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Mari <span className="text-gradient">berkolaborasi</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Punya proyek menarik atau ingin berdiskusi? Saya selalu terbuka untuk peluang baru.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://wa.me/6283800771299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              +62 838-0077-1299
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              Bangkinang, Kampar
            </span>
          </div>

          <a
            href="https://wa.me/6283800771299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-sm tracking-wide hover:opacity-90 transition-opacity glow-accent"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
