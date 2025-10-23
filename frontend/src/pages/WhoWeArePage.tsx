import React from "react";
import InfoCardsSection, { InfoCardItem } from "../components/InfoCardsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WhoWeArePage: React.FC = () => {
  const cardsData: InfoCardItem[] = [
    {
      title: "Luiz Fernando",
      subtitle: "Líder e Orientador",
      description: "Criador e fundador da Saber Generativo. Líder, orientador e supervisor de todos os projetos, é ele quem traz o toque e o tom da empatia e da humanização a cada iniciativa. A sua liderança guia a equipe e garante que a filosofia da marca seja o alicerce de tudo o que é desenvolvido para os clientes.",
    },
    {
      title: "Maria Júlia Lorenzoni",
      subtitle: "Desenvolvedora de Software",
      description: "Responsável pelo desenvolvimento das soluções da Saber Generativo, implementação de funcionalidades e manutenção da plataforma. Atua com foco em qualidade de código, inovação e integração de tecnologias para atender às necessidades da equipe e dos clientes.",
    },
    {
      title: "Pamela",
      subtitle: "Administração",
      description: "Organiza e coordena todas as atividades administrativas da Saber Generativo, garantindo que processos internos funcionem de maneira eficiente e que a equipe tenha suporte para focar em suas responsabilidades principais.",
    },
    {
      title: "Sofia",
      subtitle: "Relações-públicas",
      description: "Representa a sabedoria do primeiro contacto. O seu papel é entender as necessidades, ouvir as ideias e garantir que a jornada com o Saber Generativo comece da melhor forma.",
    },
    {
      title: "Adriano",
      subtitle: "Estrategista",
      description: "É a voz da autoridade e da visão. Inspirando-se num imperador que construiu com sabedoria, ele guia a equipe e os clientes com uma perspetiva estratégica clara.",
    },
    {
      title: "Célia",
      subtitle: "Arquiteta do conhecimento",
      description: "É a voz da objetividade. O seu trabalho é organizar e iluminar o caminho para a clareza, transformando a complexidade em conhecimento estruturado.",
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
      <Footer />
    </div>
  );
}

export default WhoWeArePage;