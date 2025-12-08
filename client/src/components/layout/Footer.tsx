import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from "lucide-react";
import logo from "@assets/LOGO_1764981731572.jpg";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Bem Cuidar Logo" 
                className="h-12 w-auto rounded-full object-cover" 
              />
              <span className="font-heading text-xl font-bold text-primary">
                Bem Cuidar
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Oferecendo cuidado, carinho e segurança para idosos em Pinhais. 
              Nossa missão é proporcionar qualidade de vida e tranquilidade para as famílias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Início</a></li>
              <li><a href="#structure" className="text-muted-foreground hover:text-primary transition-colors text-sm">Nossa Estrutura</a></li>
              <li><a href="#visitation" className="text-muted-foreground hover:text-primary transition-colors text-sm">Visitação</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors text-sm">Agenda de Eventos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123 - Centro<br />Pinhais - PR, 83320-000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(41) 3333-3333</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@bemcuidar.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-4">Horários</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Atendimento Administrativo</p>
                  <p>Seg - Sex: 08h às 18h</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Visitas (Agendadas)</p>
                  <p>Todos os dias: 14h às 17h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Casa de Repouso Bem Cuidar. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
