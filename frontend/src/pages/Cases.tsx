import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsightsSection, { InsightItem } from "../components/InsightsSection";
import MainInfoSection from "../components/MainInfoSection";
import ImgWecom from "../assets/imgs/ImgWecom.png";
import ImgRitmoPorKm from "../assets/imgs/ImgRitmo.png";
import ImgLeao from "../assets/imgs/ImgLeao.png";
import ImgFCR from "../assets/imgs/ImgFCR.png";


const CasesPage: React.FC = () => {

    const casesData: InsightItem[] = [
    {
      id: 1,
      image: ImgWecom,
      title: "Wecom: Transformando a comunicação corporativa com estratégia e IA.",
      link: "/cases/wecom",
      target: "_self"
    },
    {
      id: 2,
      image: ImgRitmoPorKm,
      title: "Ritmo por Km: Profissionalização e inovação na gestão de eventos esportivos",
      link: "/cases/ritmo-por-km",
      target: "_self"
    },
    {
      id: 3,
      image: ImgLeao,
      title: "Representações do Leão: Design e inteligência estratégica para otimização de embalagens.",
      link: "/cases/representacoes-leao",
      target: "_self"

    },
    {
      id: 4,
      image: ImgFCR,
      title: "Faculdade Católica de Rondônia: Inovação pedagógica e otimização da experiência acadêmica.",
      link: "/cases/fcr", 
    },
  ];

  return (
    <main className="pt-20">
      <Header />
      <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5">
        Cases de Sucesso
      </h1>

      <h3 className="text-gray-600 leading-relaxed text-base sm:text-lg font-sans max-w-4xl mx-auto mt-6 text-center sm:text-left">
        A Saber Generativo apoia empresas e instituições na transformação de suas estratégias, processos e experiências, combinando consultoria estratégica e soluções de Inteligência Artificial Generativa para gerar resultados concretos e mensuráveis.
      </h3>

      <h3 className="text-gray-600 leading-relaxed text-base sm:text-lg font-sans max-w-4xl mx-auto mt-4 mb-12 text-center sm:text-left">
        Cada case demonstra como metodologias ágeis, inteligência de dados e design estratégico impulsionam crescimento, otimizam operações e fortalecem a presença no mercado, seja em tecnologia, esportes, educação ou indústria.
      </h3>

      <InsightsSection
        title="Explore nossos cases de sucesso"
        items={casesData}
        infiniteScroll={false}
      />

      <Footer />
    </main>
  );
};

export default CasesPage;
