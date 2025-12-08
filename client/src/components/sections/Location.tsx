import { MapPin, Phone, Clock, MessageCircle, Car, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Endereço",
      content: (
        <>
          <p>Rua das Flores, 1234</p>
          <p>Centro, Pinhais - PR</p>
          <p className="text-sm text-muted-foreground mt-1">CEP: 83320-000</p>
        </>
      ),
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      content: (
        <>
          <p className="font-medium">(41) 3668-8839</p>
          <p className="text-sm text-muted-foreground">Falar com Neide</p>
          <p className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
            WhatsApp: (41) 99999-9999
          </p>
        </>
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Atendimento",
      content: (
        <>
          <p>Segunda a Sexta: 8h às 18h</p>
          <p>Sábados: 9h às 16h</p>
          <p>Domingos: 10h às 15h</p>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground text-lg">
            Venha nos visitar e conhecer pessoalmente nossa casa de repouso.
            Estamos de portas abertas para receber você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border/50 flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{info.title}</h4>
                  <div className="text-muted-foreground leading-relaxed">
                    {info.content}
                  </div>
                </div>
              </div>
            ))}

            <Button 
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl gap-2 mt-4"
              onClick={() => window.open('https://wa.me/5541999999999', '_blank')}
            >
              <MessageCircle className="h-6 w-6" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Map Section - Spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-[400px] lg:h-[500px] relative bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.483892214326!2d-49.1783808!3d-25.455512799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4bffebb099d%3A0xb5518b965a329ed1!2scasa%20de%20repouso%20bem%20cuidar!5e0!3m2!1spt-BR!2sbr!4v1764987385425!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Bem Cuidar - Casa de Repouso"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Directions Card */}
            <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-6 w-6 text-secondary" />
                  <h3 className="font-heading font-bold text-xl">Como Chegar</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-white/90 leading-relaxed mb-4">
                      Estamos localizados no <strong>Weissópolis</strong>, entre as ruas Rio Tietê e Rio Uruguai. 
                      Próximo à Marna Pré-fabricados.
                    </p>
                    <p className="text-white/90 flex items-center gap-2 text-sm">
                      <Info className="h-4 w-4 text-secondary shrink-0" />
                      Fácil acesso pela Av. Iraí.
                    </p>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <div className="text-sm">
                      <p className="font-bold text-secondary mb-1">Estacionamento</p>
                      <p className="text-white/90">Vagas disponíveis em frente à casa de repouso para visitantes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
