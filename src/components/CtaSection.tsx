import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5599988133403?text=Olá%2C%20Dra.%20Maria%20Ione!%20Gostaria%20de%20agendar%20uma%20consulta.";

const CtaSection = () => (
  <section className="bg-primary py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
          Não deixe para depois o que pode resolver agora
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-primary-foreground/75 font-body">
          Agende uma consulta e dê o primeiro passo para proteger seus direitos e os da sua família.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base md:text-lg">
          <MessageCircle className="h-5 w-5" />
          Agendar consulta pelo WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
