import React from "react";
import InfoCardsSection, { InfoCardItem } from "../components/InfoCardsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormSection from "../components/FormsSection";
import AdrIAno from "../assets/imgs/AdrIAno 25.png"
import SofIA from "../assets/imgs/SofIA 25.png"
import CelIA from "../assets/imgs/CélIA 25.png"
import Luiz from "../assets/imgs/LFTM03092025.jpg"
import Maria from "../assets/imgs/image (8).png"

const WhoWeArePage: React.FC = () => {
  const cardsData: InfoCardItem[] = [
    {
      title: "Luiz Fernando",
      subtitle: "Líder e Orientador",
      function: "Pessoa Humana",
      imageSrc: Luiz,
      description:
        "Criador e fundador da Saber Generativo. Líder, orientador e supervisor de todos os projetos, é ele quem traz o toque e o tom da empatia e da humanização a cada iniciativa. A sua liderança guia a equipe e garante que a filosofia da marca seja o alicerce de tudo o que é desenvolvido para os clientes.",
    },
    {
      title: "Maria Júlia Lorenzoni",
      subtitle: "Desenvolvedora de Software",
      function: "Pessoa Humana",
      imageSrc: Maria,
      description:
        "Responsável pelo desenvolvimento das soluções da Saber Generativo, implementação de funcionalidades e manutenção da plataforma. Atua com foco em qualidade de código, inovação e integração de tecnologias para atender às necessidades da equipe e dos clientes.",
    },
    {
      title: "Sofia",
      subtitle: "Relações-públicas",
      function: "Assistente Digital",
      imageSrc: SofIA,
      description:
        "Representa a sabedoria do primeiro contacto. O seu papel é entender as necessidades, ouvir as ideias e garantir que a jornada com o Saber Generativo comece da melhor forma.",
    },
    {
      title: "Adriano",
      subtitle: "Estrategista",
      function: "Assistente Digital",
      imageSrc: AdrIAno,
      description:
        "É a voz da autoridade e da visão. Inspirando-se num imperador que construiu com sabedoria, ele guia a equipe e os clientes com uma perspetiva estratégica clara.",
    },
    {
      title: "Célia",
      subtitle: "Arquiteta do conhecimento",
      function: "Assistente Digital",
      imageSrc: CelIA,
      description:
        "É a voz da objetividade. O seu trabalho é organizar e iluminar o caminho para a clareza, transformando a complexidade em conhecimento estruturado.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="pt-20">
        <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5">Quem somos</h1>
        <InfoCardsSection
          items={cardsData}
          columns={2}
          bgColor="#F9FBFC"
          cardBgColor="#FFFFFF"
          titleColor="#174980"
          />
      </div>

        <FormSection
        title="O que podemos construir juntos?"
        bgColor="#174980"
        buttonColor="#05A694"
        buttonText="Conversar"
      />
      <Footer />
    </div>
  );
}

export default WhoWeArePage;