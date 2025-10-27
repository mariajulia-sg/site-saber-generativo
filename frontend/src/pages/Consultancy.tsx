import React from "react";
import MainInfoSection from "../components/MainInfoSection";
import ConsultoriaImg from "../assets/imgs/consultoria.png";
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
      <MainInfoSection
        bgColor="#F9FBFC"
        title="Consultoria Estratégica Especializada"
        sections={[
          {
            text: " A maestria reside em extrair valor das ferramentas certas com intenção e propósito. Com a nossa Consultoria Estratégica, descomplicamos a IA Generativa. Identificamos as melhores oportunidades de aplicação, alinhando a tecnologia aos seus objetivos de negócio e construindo um plano de ação claro para que você e a sua equipe possam co-criar um futuro mais eficiente.",
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
