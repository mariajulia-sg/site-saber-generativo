import React from "react";
import MainInfoSection from "../components/MainInfoSection";
import ConsultoriaImg from "../assets/imgs/consultoria.png"; // ajuste o caminho real da imagem
import Header from "../components/Header";
import InfoGridSection from "../components/InfoGridSection";
import FormSection from "../components/FormsSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
const ConsultancyPage: React.FC = () => {

  const cards = [
    {
      title: "Integra filosofia e tecnologia:",
      description:
        "Une valores <strong>humanos</strong> e <strong>inovação</strong> para soluções com propósito.",
    },
    {
      title: "Planos personalizados:",
      description:
        "Estratégias <strong>sob medida</strong> para as necessidades reais do <strong>seu negócio</strong>.",
    },
    {
      title: "Inovação sustentável:",
      description:
        "Foco em <strong>resultados duradouros</strong> e <strong>crescimento consistente</strong>.",
    },
    {
      title: "Clareza de propósito:",
      description:
        "Decisões <strong>alinhadas à cultura</strong> e aos objetivos da <strong>sua empresa</strong>.",
    },
  ];

  return (
    <main className="pt-20" >
      <Header />
      <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5">Consultoria Estratégica</h1>
      <MainInfoSection
        bgColor="#F9FBFC"
        title="Estratégia inteligente para transformar o futuro do seu negócio"
        sections={[
          {
            subtitle: "Consultoria Estratégica Especializada",
            text: "A Saber Generativo oferece consultoria estratégica especializada, unindo conhecimento humano e inteligência artificial para identificar oportunidades, otimizar processos e construir vantagem competitiva.",
          },
          {
            subtitle: "Abordagem Colaborativa e Foco em Resultados",
            text: "Com uma abordagem colaborativa e foco em resultados, ajudamos sua empresa a alinhar tecnologia, estratégia e cultura — criando planos de ação claros, sustentáveis e orientados ao crescimento.",
          },
        ]}
        imageSrc={ConsultoriaImg}
        imageAlt="Consultoria estratégica Saber Generativo"
        hideImageOnMobile={true}
      />

      <InfoGridSection
      title="Por que a consultoria estratégica da Saber Generativo pode transformar a sua empresa:"
      cards={cards}
    />

      <FormSection
        title="O que podemos construir juntos?"
        bgColor="#05A694"
        buttonColor="#174980"
        buttonText="Conversar"
      />
      <ServicesSection />
      <Footer />
    </main>
  );
};

export default ConsultancyPage;
