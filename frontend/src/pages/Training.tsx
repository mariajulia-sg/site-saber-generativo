import React from "react";
import MainInfoSection from "../components/MainInfoSection";
import TreinamentoImg from "../assets/imgs/alto-falante-alegre-falando-e-olhando-para-distancia.jpg";
import Header from "../components/Header";
import InfoGridSection from "../components/InfoGridSection";
import FormSection from "../components/FormsSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const TrainingsPage: React.FC = () => {

    const cards = [
      {
        title: "Capacitação prática:",
        description:
          "Transformamos conhecimento em <strong>habilidade real</strong>, garantindo que sua equipe domine as ferramentas de IA.",
      },
      {
        title: "Treinamento sob medida:",
        description:
          "Programas <strong>personalizados</strong>, alinhados aos <strong>processos e desafios</strong> específicos da sua empresa.",
      },
      {
        title: "Desbloqueio do potencial criativo:",
        description:
          "Estimula a <strong>criatividade</strong> e <strong>produtividade</strong> de cada profissional, tornando a IA uma parceira estratégica.",
      },
      {
        title: "Autonomia e confiança:",
        description:
          "Sua equipe ganha <strong>independência</strong> e <strong>confiança</strong> para usar soluções de IA de forma eficaz e segura.",
      },
    ];

  return (
    <main className="pt-20" >
      <Header />
      <MainInfoSection
        bgColor="#F9FBFC"
        title="Treinamento Personalizado"
        sections={[
          {
            text: "Acreditamos que a IA é uma parceira. O nosso Treinamento Personalizado capacita as suas equipes para que elas não apenas usem as ferramentas, mas as dominem. Transformamos a tecnologia numa aliada estratégica no dia a dia, desbloqueando o potencial criativo e produtivo de cada profissional.",
          },
        ]}
        imageSrc={TreinamentoImg}
        imageAlt="Treinamento"
        hideImageOnMobile={true}
      />
        <MainInfoSection
          bgColor="#F9FBFC"
          title="Curso: Criando um Assistente Digital com Gemini"
          sections={[
            {
              text: "Aprenda a construir seu próprio assistente digital com Gemini. Este curso oferece uma abordagem prática e direta, integrando técnicas de IA Generativa para que você crie soluções inteligentes aplicáveis aos seus projetos.",
              cta: {
                text: "Saiba mais sobre o curso",
                link: "https://sites.google.com/view/cadcomgemini/home",
              },
            },
          ]}
          videoSrc="https://www.youtube.com/embed/H_q5ftdGImA"
          reverse={true}
          hideImageOnMobile={false}
        />



      <InfoGridSection
        title="Por que investir em Treinamento Personalizado com a Saber Generativo?"
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

export default TrainingsPage;
