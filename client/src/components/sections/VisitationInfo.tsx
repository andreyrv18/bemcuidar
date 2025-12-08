import { Calendar, Clock, HeartHandshake, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VisitationInfo() {
  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Agendamento Prévio",
      description: "Para segurança de todos, solicitamos que as visitas sejam agendadas com antecedência via telefone ou WhatsApp."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Horários Flexíveis",
      description: "Visitas diárias das 14h às 17h. Horários especiais podem ser combinados com a administração."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-secondary" />,
      title: "Protocolos de Saúde",
      description: "Seguimos rigorosos protocolos de higiene. O uso de máscara pode ser solicitado dependendo da sazonalidade."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
      title: "Acolhimento Familiar",
      description: "Incentivamos a participação da família. Dispomos de áreas privativas para momentos de qualidade."
    }
  ];

  return (
    <section id="visitation" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Família e Conexão</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Como funcionam as visitas?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Sabemos o quanto a presença da família é fundamental para o bem-estar dos nossos residentes. 
              Por isso, nosso processo de visitação é desenhado para ser simples, seguro e acolhedor, 
              garantindo momentos preciosos de convivência.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="bg-primary/5 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/20 transition-all"
                onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
              >
                Agendar sua visita agora
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] rotate-3 z-0"></div>
            <div className="relative z-10 bg-white p-2 rounded-[1.5rem] shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop" 
                alt="Filha visitando mãe idosa" 
                className="w-full h-[600px] object-cover rounded-[1.2rem]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-[1.2rem]">
                <p className="text-white font-medium text-lg italic">"O carinho da família é o melhor remédio para a alma."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
