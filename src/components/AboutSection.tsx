import { motion } from "framer-motion";
import { Award, BookOpen, Users } from "lucide-react";

const stats = [
  { icon: Award, label: "OAB/MA 31222" },
  { icon: BookOpen, label: "Especialista em Família" },
  { icon: Users, label: "Atendimento Humanizado" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent font-body"
        >
          Sobre a Advogada
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
        >
          Dra. Maria Ione Pinto Moreira Rocha
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-lg leading-relaxed text-slate-text font-body"
        >
          Advogada inscrita na OAB/MA sob o nº 31222, com atuação dedicada ao
          Direito de Família. Acredito que cada caso é único e merece atenção
          personalizada. Meu compromisso é oferecer orientação jurídica clara,
          acolhedora e eficiente, buscando sempre a melhor solução para você e
          sua família.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-8 sm:flex-row"
        >
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-foreground">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold font-body">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
