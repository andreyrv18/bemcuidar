import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/pixrl_1765195797324.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fachada da Casa de Repouso Bem Cuidar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent md:via-primary/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent backdrop-blur-sm border border-accent/30 text-sm font-semibold mb-6">
              Referência em Cuidado de Idosos em Pinhais
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Cuidado, Segurança e{" "}
              <span className="text-secondary">Carinho</span> que sua família
              merece.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Um ambiente acolhedor e profissional, pensado para proporcionar
              qualidade de vida, dignidade e felicidade na melhor idade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-accent font-bold text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Agendar uma Visita
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 h-14 rounded-full backdrop-blur-sm"
              >
                Conhecer Estrutura
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm uppercase tracking-widest">Descubra Mais</span>
      </motion.div>
    </section>
  );
}
