import { motion } from "framer-motion";
import { FileText, Heart, Users, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5599988133403?text=Olá%2C%20Dra.%20Maria%20Ione!%20Gostaria%20de%20saber%20mais%20sobre%20";

const services = [
  {
    icon: FileText,
    title: "Divórcio",
    description: "Divórcio consensual e litigioso, judicial ou extrajudicial. Cuido de cada detalhe para que o processo seja rápido e menos desgastante.",
    wa: "divórcio.",
  },
  {
    icon: Heart,
    title: "Pensão Alimentícia",
    description: "Fixação, revisão e execução de pensão alimentícia. Garanto que os direitos financeiros sejam respeitados e cumpridos.",
    wa: "pensão%20alimentícia.",
  },
  {
    icon: Users,
    title: "Guarda de Filhos",
    description: "Guarda compartilhada, unilateral e regulamentação de visitas. Priorizo sempre o melhor interesse da criança.",
    wa: "guarda%20de%20filhos.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="section-alt py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent font-body"
        >
          Áreas de Atuação
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground md:text-4xl"
        >
          Como posso ajudar você
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description, wa }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
              <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
            <p className="mb-6 leading-relaxed text-slate-text font-body text-sm">{description}</p>
            <a
              href={`${WHATSAPP_URL}${wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-whatsapp-hover font-body"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar sobre {title.toLowerCase()}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
