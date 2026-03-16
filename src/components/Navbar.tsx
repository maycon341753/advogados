import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5599988133403?text=Olá%2C%20Dra.%20Maria%20Ione!%20Gostaria%20de%20agendar%20uma%20consulta.";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-foreground">
          Dra. Maria Ione
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground font-body">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !px-5 !py-2.5 !text-sm">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground font-body">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-4 w-full !text-sm">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
