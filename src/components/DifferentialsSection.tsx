import { motion } from "framer-motion";
import { Zap, HeartHandshake, Globe, Lock } from "lucide-react";

const items = [
  { icon: Zap, title: "Agilidade", text: "Processos conduzidos com eficiência para resolver seu caso no menor tempo possível." },
  { icon: HeartHandshake, title: "Atendimento Humano", text: "Escuta ativa e acolhimento em cada etapa. Você não é só mais um processo." },
  { icon: Globe, title: "Atendimento Online", text: "Consultas por videoconferência para todo o Brasil. Sem sair de casa." },
  { icon: Lock, title: "Sigilo Total", text: "Seu caso é tratado com absoluta confidencialidade e respeito à privacidade." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent font-body"
        >
          Por que me escolher
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground md:text-4xl"
        >
          Diferenciais do meu atendimento
        </motion.h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-text font-body">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
