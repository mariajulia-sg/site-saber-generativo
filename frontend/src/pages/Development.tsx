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
            text: "A inovação se constrói em parceria. Por meio do nosso serviço de Desenvolvimento de Soluções, integramos ferramentas de Inteligência Artificial Generativa e softwares personalizados às necessidades específicas de cada cliente. Com a nossa experiência técnica e a sua visão de negócio, entregamos soluções que se encaixam perfeitamente nos seus processos, otimizam o trabalho da sua equipe e impulsionam o crescimento da sua empresa.",
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
        <ServicesSection
          services={[
            {
              title: "Consultoria Estratégica",
              description: "Oferecemos consultoria personalizada para otimizar seus processos.",
              link: "/consultoria",
            },
            {
              title: "Treinamento Personalizado",
              description: "Capacitação e workshops para sua equipe.",
              link: "/treinamentos",
            },
          ]}
        />      <Footer />
    </main>
  );
};

export default DevelopmentPage;
