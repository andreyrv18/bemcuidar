import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

// Images
import outdoorImg from "@assets/1-area-externa-socializacao-idosos-lar-repouso.jpg";
import gardenImg from "@assets/2-idosos-jardim-ar-livre-contato-natureza.jpg";
import diningImg from "@assets/3-refeitorio-idosos-alimentacao-saudavel-cuidados.jpg";
import livingImg from "@assets/4-idosos-assistindo-tv-sala-estar-lar.jpg";

const slides = [
  {
    title: "Áreas Externas",
    description: "Espaço amplo e seguro para banhos de sol e atividades ao ar livre.",
    image: outdoorImg,
  },
  {
    title: "Contato com a Natureza",
    description: "Jardim arborizado para momentos de tranquilidade e paz.",
    image: gardenImg,
  },
  {
    title: "Alimentação Balanceada",
    description: "Refeitório acolhedor com refeições preparadas com carinho e acompanhamento nutricional.",
    image: diningImg,
  },
  {
    title: "Convivência e Lazer",
    description: "Sala de estar confortável para interação, TV e atividades em grupo.",
    image: livingImg,
  },
];

export function FacilitiesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="structure" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Nossa Estrutura
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada detalhe foi pensado para garantir acessibilidade, segurança e conforto.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                  <div className="aspect-[16/9] md:aspect-[21/9] relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                      <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-white/90 text-lg max-w-2xl">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-primary border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-primary border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
