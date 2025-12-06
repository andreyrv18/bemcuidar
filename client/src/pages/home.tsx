import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FacilitiesCarousel } from "@/components/sections/FacilitiesCarousel";
import { VisitationInfo } from "@/components/sections/VisitationInfo";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="bg-white relative z-10 rounded-t-[2.5rem] -mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pt-10">
          <div className="container mx-auto px-4 py-12 text-center max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
              Bem-vindo à Bem Cuidar Pinhais
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos mais que uma casa de repouso; somos um novo lar. Localizada em uma área tranquila de Pinhais, 
              nossa instituição combina a excelência médica com o calor humano, criando um ambiente onde cada residente 
              é tratado como único.
            </p>
          </div>
        </div>
        <FacilitiesCarousel />
        <VisitationInfo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
