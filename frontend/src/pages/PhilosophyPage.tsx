import React from "react";
import MainInfoSection from "../components/MainInfoSection";
import FilosofiaImg from "../assets/imgs/filosofia.png"; 
import Header from "../components/Header";
import FormSection from "../components/FormsSection";
import ConsultancyPage from "./Consultancy";
import Footer from "../components/Footer";
import InfoCardsSection, { InfoCardItem } from "../components/InfoCardsSection";

const PhilosophyPage: React.FC = () => {
    const cardsData: InfoCardItem[] = [
    {
      title: "Empatia Humana",
      subtitle: "A essência da nossa abordagem",
      description: "Acreditamos que o verdadeiro poder da IA Generativa reside na nossa capacidade de ir além da automação. Colocamos a empatia no centro de cada projeto, garantindo que as soluções não apenas funcionem, mas também se conectem de forma significativa com as pessoas.",
    },
    {
      title: "Mente Estratégica",
      subtitle: "A direção que guia o nosso caminho",
      description: "Cada projeto é uma oportunidade de construir com sabedoria. Guiamos os nossos clientes com uma visão estratégica clara, transformando a complexidade em conhecimento estruturado e ações com propósito que geram valor a longo prazo.",
    },
  ];

  return (
    <main className="pt-20" >
      <Header />
      <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5">Nossa filosofia</h1>

      <MainInfoSection
        bgColor="#F9FBFC"
        title="Onde a tecnologia encontra o pensamento humano"
        sections={[
          {
            text: "A Saber Generativo oferece consultoria estratégica especializada, unindo conhecimento humano e inteligência artificial para identificar oportunidades, otimizar processos e construir vantagem competitiva.",
          },
          {
            text: "Com uma abordagem colaborativa e foco em resultados, ajudamos sua empresa a alinhar tecnologia, estratégia e cultura — criando planos de ação claros, sustentáveis e orientados ao crescimento.",
          },
        ]}
        imageSrc={FilosofiaImg}
        imageAlt="Filosofia da Saber Generativo"
        hideImageOnMobile={true}
      />

      <MainInfoSection
          bgColor="#F9FBFC"
          title="Hype da IA Motivação ou Manipulação"
          sections={[
            {
              text: "Acreditamos que a Inteligência Artificial não substitui o humano — ela o amplifica. Assista ao vídeo e descubra nossa visão sobre o verdadeiro papel da IA",
            },
          ]}
          videoSrc="https://www.youtube.com/embed/O9ESS6xxUTE"
          reverse={true}
          hideImageOnMobile={false}
        />


      <InfoCardsSection
        items={cardsData}
        columns={2}
        bgColor="#F9FBFC"
        cardBgColor="#FFFFFF"
        titleColor="#174980"
      />

      <FormSection
        title="O que podemos construir juntos?"
        bgColor="#174980"
        buttonColor="#05A694"
        buttonText="Conversar"
      />
      <Footer />
    </main>
  );
};

export default PhilosophyPage;
