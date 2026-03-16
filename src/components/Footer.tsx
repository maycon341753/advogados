import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container text-center">
      <p className="font-display text-lg font-bold text-foreground mb-2">
        Dra. Maria Ione Pinto Moreira Rocha
      </p>
      <p className="text-sm text-muted-foreground font-body mb-4">
        Advogada · OAB/MA 31222
      </p>
      <a href="mailto:mariaione.adv@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
        <Mail className="h-4 w-4" />
        mariaione.adv@gmail.com
      </a>
      <p className="mt-8 text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Maria Ione Advocacia. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
