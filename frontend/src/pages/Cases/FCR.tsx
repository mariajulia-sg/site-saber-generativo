import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInfoSection from "../../components/MainInfoSection";
import ImgFCR from "../../assets/imgs/Logo FCR.jpeg";

const FCRCasePage: React.FC = () => {
    return (
    <main className="pt-20">
      <Header />
    <MainInfoSection
      bgColor="#F9FBFC"
      sections={[
        {
          subtitle: "Contexto e Desafio",
          text: "A Faculdade Católica de Rondônia, instituição de ensino superior de grande relevância regional, surge como um case de sucesso em sua incursão estratégica no competitivo mercado de inovação pedagógica e expansão de cursos, contando com a Consultoria Estratégica da Saber Generativo para alinhar organização e tecnologias disruptivas."
        },
        {
          subtitle: "Valorização do Diferencial Competitivo",
          text: "O projeto se dedicou à valorização do diferencial competitivo da liderança acadêmica – como a experiência prévia na criação de metodologias ativas – permitindo que a instituição oferecesse uma proposta de valor singular centrada na consultoria de otimização curricular para co-criar soluções que harmonizam ensino, pesquisa e modernização da gestão."
        },
        {
          subtitle: "Estratégia e Roadmap de IA Generativa",
          text: "O trabalho intensivo focou na elaboração da estratégia e do roadmap de Inteligência Artificial (IA) Generativa, traduzindo o potencial da IA em soluções reais e mensuráveis, como a otimização da personalização do percurso do aluno e a criação de materiais didáticos em escala, por meio da integração de soluções de IA no ecossistema Google Workspace."
        },
        {
          subtitle: "Gestão de Informações e Insights Acionáveis",
          text: "A consultoria utilizou sua expertise para estruturar a gestão, transformando vastos volumes de informações (como regulamentações do MEC e dados de avaliação CAPES) em insights acionáveis, apoiando decisões estratégicas e pedagógicas."
        },
        {
          subtitle: "Inovação Pedagógica e Modernização",
          text: "Ao mesmo tempo, a consultoria abordou o desafio de superar a inércia dos métodos pedagógicos tradicionais, posicionando a Faculdade Católica de Rondônia como uma parceira estratégica em inovação pedagógica e otimização da experiência acadêmica."
        },
      ]}
      imageSrc={ImgFCR}
      imageAlt="Logo Faculdade Católica de Rondônia"
      centerImageInsteadOfTitle={true}
    />
      <Footer />
    </main>
    );
}

export default FCRCasePage;