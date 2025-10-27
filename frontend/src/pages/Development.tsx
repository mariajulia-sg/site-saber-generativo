import React from "react";
import MainInfoSection from "../components/MainInfoSection";
import DesenvolvimentoWeb from "../assets/imgs/chris-ried-ieic5Tq8YMk-unsplash-scaled.png";
import Header from "../components/Header";
import InfoGridSection from "../components/InfoGridSection";
import FormSection from "../components/FormsSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const DevelopmentPage: React.FC = () => {

  const cards = [
    {
      title: "Soluções personalizadas:",
      description:
        "Criamos ferramentas de <strong>IA Generativa</strong> sob medida para resolver os desafios <strong>específicos</strong> da sua empresa.",
    },
    {
      title: "Integração com seus processos:",
      description:
        "As soluções se encaixam perfeitamente nos <strong>fluxos de trabalho</strong> existentes, otimizando operações e aumentando a eficiência.",
    },
    {
      title: "Crescimento orientado à inovação:",
      description:
        "Combinamos <strong>experiência técnica</strong> e <strong>visão estratégica</strong> para impulsionar o crescimento do seu negócio.",
    },
    {
      title: "Resultados concretos:",
      description:
        "Foco em <strong>impacto real</strong> e <strong>mensurável</strong>, transformando desafios em soluções eficazes.",
    },
  ];

  return (
    <main className="pt-20" >
      <Header />
      <MainInfoSection
        bgColor="#F9FBFC"
        title="Desenvolvimento de Soluções"
        sections={[
          {
            text: "A inovação constrói-se juntos. Através do nosso Desenvolvimento de Soluções, construímos e integramos ferramentas de IA Generativa à medida para resolver os desafios que você nos apresentar. Com a nossa experiência e a sua visão, criamos soluções que se encaixam perfeitamente nos seus processos, otimizando o seu trabalho e impulsionando o seu crescimento.",
          },
        ]}
        imageSrc={DesenvolvimentoWeb}
        imageAlt="Desenvolvimento de Soluções"
        hideImageOnMobile={true}
      />

      <InfoGridSection
      title="Por que investir em Desenvolvimento de Soluções Personalizadas?"
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

export default DevelopmentPage;
