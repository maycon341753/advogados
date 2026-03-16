import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5599988133403?text=Olá%2C%20Dra.%20Maria%20Ione!%20Gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "radial-gradient(circle at 25% 25%, hsl(217 49% 30%) 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    }} />

    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/80">
            <Shield className="h-4 w-4" />
            OAB/MA 31222 · Especialista em Direito de Família
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
        >
          Protegendo seus direitos no{" "}
          <span className="text-accent">Divórcio</span>,{" "}
          <span className="text-accent">Pensão</span> e{" "}
          <span className="text-accent">Guarda</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/75 font-body md:text-xl"
        >
          Resolva seu caso com agilidade, sigilo e atendimento humanizado.
          Atendimento online para todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base md:text-lg">
            <MessageCircle className="h-5 w-5" />
            Fale agora pelo WhatsApp
          </a>
          <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10">
            Conheça os serviços
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
