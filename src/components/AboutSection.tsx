import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const info = [
  { icon: User, label: "Nama", value: "Afif Alfarisi Hernas" },
  { icon: MapPin, label: "Asal", value: "Bangkinang, Kampar" },
  { icon: GraduationCap, label: "Kampus", value: "UIN Suska Riau" },
  { icon: Briefcase, label: "Status", value: "Distributor Baba Parfum" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">Tentang</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Mahasiswa, <span className="text-gradient">Atlet</span>, & Entrepreneur
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6">
            Di luar akademik, saya adalah seorang <strong className="text-foreground">Pelari</strong> dan <strong className="text-foreground">Atlet Catur</strong>. 
            Catur mengajarkan saya berpikir strategis, analitis, dan sabar.
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-16">
            Saya juga merintis jalur sebagai wirausaha muda melalui <strong className="text-foreground">Baba Parfum</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
