import { motion } from "framer-motion";
import { Code2, Trophy, ShoppingBag, Brain } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Sistem Informasi",
    desc: "Mahasiswa aktif di UIN Suska Riau, mendalami dunia IT",
  },
  {
    icon: Trophy,
    title: "Atlet Lari & Catur",
    desc: "Peserta POMNAS XI, pelari dan atlet catur berprestasi",
  },
  {
    icon: ShoppingBag,
    title: "Baba Parfum",
    desc: "Distributor resmi bisnis baba parfum, wirausaha muda",
  },
  {
    icon: Brain,
    title: "Berpikir Strategis",
    desc: "Analitis, strategis, dan sabar — terasah dari catur",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">Keahlian</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Apa yang saya <span className="text-gradient">kuasai</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-accent transition-shadow">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
