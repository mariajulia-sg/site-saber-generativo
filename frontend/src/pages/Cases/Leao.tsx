import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInfoSection from "../../components/MainInfoSection";
import ImgLeao from "../../assets/imgs/Logo Representações do Leão.jpg";

const LeaoCasePage: React.FC = () => {
    return (
    <main className="pt-20">
      <Header />
    <MainInfoSection
      bgColor="#F9FBFC"
      sections={[
        {
          subtitle: "Contexto e Desafio",
          text: "A Representações do Leão, empresa com mais de duas décadas de experiência consolidada na representação de embalagens plásticas para o setor cerealista, surge como um case de sucesso em sua incursão estratégica no competitivo mercado de embalagens para frigoríficos no Rio Grande do Sul, contando com a Consultoria Estratégica da Saber Generativo para alinhar inovação e organização."
        },
        {
          subtitle: "Valorização do Diferencial Competitivo",
          text: "O projeto se dedicou à valorização do diferencial competitivo da líder Jaqueline Silva — sua formação em Design Industrial e experiência prévia como designer de embalagens — permitindo que a empresa oferecesse uma proposta de valor singular centrada na consultoria de design para co-criar soluções que harmonizam funcionalidade, estética e sustentabilidade para produtos cárneos."
        },
        {
          subtitle: "Estratégia e Roadmap de IA Generativa",
          text: "O trabalho intensivo focou na elaboração da estratégia e do roadmap de Inteligência Artificial (IA) Generativa, traduzindo o potencial da IA em soluções reais e mensuráveis, como a otimização da prospecção de clientes e a personalização de propostas comerciais em escala, por meio da integração de soluções de IA no ecossistema Google Workspace."
        },
        {
          subtitle: "Gestão de Informações e Insights Acionáveis",
          text: "A consultoria utilizou sua expertise para estruturar a gestão, transformando vastos volumes de informações (como regulamentações da ANVISA e MAPA) em insights acionáveis, apoiando decisões estratégicas e comerciais."
        },
        {
          subtitle: "Inovação e Otimização de Embalagens",
          text: "Ao mesmo tempo, a consultoria abordou o desafio de superar a inércia dos métodos de prospecção tradicionais, posicionando a Representações do Leão como uma parceira estratégica em inovação e otimização de embalagens."
        },
      ]}
      imageSrc={ImgLeao}
      imageAlt="Logo Representações do Leão"
      centerImageInsteadOfTitle={true}
    />
      <Footer />
    </main>
    );
}

export default LeaoCasePage;