import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/LOGO_1764981731572.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Estrutura", href: "#structure" },
    { name: "Visitas", href: "#visitation" },
    { name: "Planos", href: "#pricing" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Bem Cuidar Logo" 
                className="h-12 w-auto rounded-full object-cover border-2 border-primary/20" 
              />
              <span className="font-heading text-xl font-bold text-primary hidden sm:inline-block">
                Bem Cuidar
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Agendar Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white absolute w-full shadow-lg animate-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
              Agendar Visita
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
