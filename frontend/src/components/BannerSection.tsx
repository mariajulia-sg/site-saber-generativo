import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Imagem from "../assets/imgs/banner1.png";

interface Banner {
  id: number;
  bgColor: string;
  textColor: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
}

const BANNERS: Banner[] = [
  {
    id: 1,
    bgColor: "#05A694",
    textColor: "#F2EEEB",
    title: "Encontro da Filosofia com a Tecnologia",
    text: "Criamos o futuro da IA por meio de uma prática inovadora, que transforma informação em conhecimento e conhecimento em ações com propósito.",
    buttonText: "Conheça a nossa filosofia",
    link: "/filosofia",
  },
  {
    id: 2,
    bgColor: "#0077B6",
    textColor: "#FFFFFF",
    title: "Inovação que move o mundo digital",
    text: "Desenvolvemos soluções inteligentes que conectam pessoas, dados e ideias para gerar impacto real.",
    buttonText: "Veja nossos cases",
    link: "/cases",
  },
];

const BannerSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const banner = BANNERS[current];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % BANNERS.length),
      15000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden transition-all duration-700 ease-in-out lg:h-[75vh]"
      style={{
        backgroundColor: banner.bgColor,
        color: banner.textColor,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-8 relative z-20">
        <div className="flex-1 text-left max-w-[650px] pt-20 pb-8 z-30">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
            {banner.title}
          </h2>
          <p className="mb-8 text-lg font-inter opacity-95">{banner.text}</p>
          <Link
            to={banner.link}
            className="inline-block bg-[#153E66] text-white hover:bg-[#1d4f82] px-10 py-4 rounded-lg font-medium text-lg transition"
          >
            {banner.buttonText}
          </Link>
        </div>

        <div className="hidden lg:block w-1/3" />
      </div>

      {banner.id === 1 && (
        <img
          src={Imagem}
          alt="Banner ilustrativo"
          className="
            hidden lg:block
            absolute inset-y-0 right-0
            h-full w-auto
            max-w-[480px]
            object-contain
            pointer-events-none select-none
            z-10
          "
        />
      )}

    <div
        className="
          absolute 
          bottom-4 sm:bottom-6 lg:bottom-8 
          left-1/2 -translate-x-1/2 
          flex space-x-3 z-30
        "
      >
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-500 ${
              index === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
