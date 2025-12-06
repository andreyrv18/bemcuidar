import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Day Care (Diária)",
    description: "Para idosos que precisam de cuidados durante o dia, voltando para casa à noite.",
    price: "A partir de R$ 150",
    period: "/dia",
    features: [
      "Alimentação completa (5 refeições)",
      "Participação nas atividades recreativas",
      "Administração de medicamentos",
      "Banho e higiene pessoal",
      "Monitoramento de enfermagem",
      "Horário: 07h às 19h"
    ],
    highlight: false,
    cta: "Consultar Disponibilidade"
  },
  {
    name: "Residência Standard",
    description: "Moradia permanente em quartos duplos ou triplos com todo o conforto.",
    price: "Sob Consulta",
    period: "",
    features: [
      "Hospedagem 24h",
      "6 refeições diárias balanceadas",
      "Enfermagem 24h",
      "Serviço de lavanderia",
      "Atividades terapêuticas em grupo",
      "Visitas familiares diárias"
    ],
    highlight: true,
    cta: "Solicitar Orçamento"
  },
  {
    name: "Residência Premium",
    description: "Privacidade total em suítes individuais com serviços exclusivos.",
    price: "Sob Consulta",
    period: "",
    features: [
      "Suíte individual personalizada",
      "Cardápio personalizado (nutricionista)",
      "Fisioterapia preventiva inclusa",
      "Concierge para necessidades pessoais",
      "Todos os benefícios Standard",
      "Smart TV e Frigobar no quarto"
    ],
    highlight: false,
    cta: "Solicitar Orçamento"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Planos e Investimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos opções flexíveis que se adaptam às necessidades da sua família.
            Transparência e qualidade em primeiro lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col h-full border-2 transition-all duration-300 hover:shadow-xl ${
                plan.highlight 
                  ? "border-secondary bg-white shadow-lg scale-105 z-10" 
                  : "border-border/50 bg-accent/10 hover:bg-white hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <Star size={14} fill="currentColor" /> Mais Procurado
                </div>
              )}

              <CardHeader className="pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                <CardDescription className="text-base mt-2 min-h-[3rem]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full rounded-full font-bold h-12 ${
                    plan.highlight 
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25" 
                      : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center p-6 bg-accent/20 rounded-2xl border border-accent/50">
          <p className="text-primary/80 font-medium">
            Precisa de um plano personalizado ou cuidados especiais? 
            <a href="#contact" className="text-primary font-bold underline ml-2 hover:text-secondary">Fale conosco</a> para uma avaliação individualizada.
          </p>
        </div>
      </div>
    </section>
  );
}
