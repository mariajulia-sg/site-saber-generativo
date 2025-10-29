import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInfoSection from "../../components/MainInfoSection";
import ImgWecom from "../../assets/imgs/Logo Wecom.jpg";

const WecomCasePage: React.FC = () => {
    return (
    <main className="pt-20">
      <Header />
      <MainInfoSection
        bgColor="#F9FBFC"
        sections={[
          {
            subtitle: "Contexto e Desafio",
            text: "A Wecom, consolidada como uma integradora, mantenedora e distribuidora de sistemas de comunicação unificada, soluções para salas de conferência para o mercado corporativo brasileiro, caracteriza um case de sucesso em sua jornada de crescimento acelerado, contando com a Consultoria Estratégica da Saber Generativo para alinhar inovação e organização.",
          },
          {
            subtitle: "Estratégia de Inteligência Artificial",
            text: "Atuando como o elo entre estratégia, inovação e operação, a consultoria se dedicou ao diagnóstico da IA generativa e agêntica no contexto da empresa, resultando numa proposta inovadora de Política e de Comitê para Inteligência Artificial.",
          },
          {
            subtitle: "Gestão Estratégica e Cultura Organizacional",
            text: "A consultoria utilizou sua expertise para planejar o próximo ciclo anual, adotando um modelo de Gestão Estratégica Ágil com ciclos trimestrais e foco em resultados de desempenho nas atividades fins da Wecom.",
          },
          {
            subtitle: "Base de Conhecimento Inteligente",
            text: "Como parte da estratégia de inovação contínua, a Saber Generativo implementou uma base de conhecimento inteligente com mais de 150 conteúdos, utilizando ferramentas como Gemini e NotebookLM, reforçando o aprendizado organizacional e o compartilhamento de conhecimento estratégico.",
          },
        ]}
        imageSrc={ImgWecom}
        imageAlt="Logo Wecom"
        centerImageInsteadOfTitle={true}
      />
      <Footer />
    </main>
    );
}

export default WecomCasePage;