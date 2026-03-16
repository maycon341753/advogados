import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5599988133403?text=Olá%2C%20Dra.%20Maria%20Ione!%20Gostaria%20de%20agendar%20uma%20consulta.";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="btn-whatsapp-float animate-pulse-gentle"
  >
    <MessageCircle className="h-8 w-8" fill="currentColor" />
  </a>
);

export default WhatsAppFloat;
