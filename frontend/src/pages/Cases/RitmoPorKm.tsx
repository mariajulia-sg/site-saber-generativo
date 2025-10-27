import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainInfoSection from "../../components/MainInfoSection";
import ImgRitmoPorKm from "../../assets/imgs/Logo Ritmo por Km branco.jpg";

const RitmoPorKmCasePage: React.FC = () => {
    return (
    <main className="pt-20">
      <Header />
      <MainInfoSection
      bgColor="#F9FBFC"
      sections={[
        {
          subtitle: "Contexto e Desafio",
          text: "A Ritmo por Km Assessoria Esportiva, consolidada como empreendimento em organização e consultoria técnica de eventos de corrida de rua, emerge em um processo de Gestão Estratégica e Reposicionamento de Marca, contando com a Consultoria em Inteligência Artificial Generativa (IA Gen) da Saber Generativo para superar suas dificuldades em comunicação e marketing."
        },
        {
          subtitle: "Planejamento e Estratégia do Evento",
          text: "Atuando como o elo entre conhecimento técnico do empreendedor em percursos e a necessidade de profissionalização e inovação na gestão, a consultoria se dedicou à estruturação do planejamento e da estratégia para a 4ª edição da Corrida Luau Laranjal, o principal evento da Ritmo por Km."
        },
        {
          subtitle: "Análise de Dados e Viabilidade Econômico-Financeira",
          text: "O trabalho intensivo focou em traduzir os dados históricos dos eventos em informações acionáveis para a viabilidade econômico-financeira, incluindo o mapeamento de custos e projeções de captação de recursos, utilizando expertise para analisar criticamente o modelo de negócio e gerar relatórios, infográficos e dashboards estruturados."
        },
        {
          subtitle: "Aplicação de Inteligência Artificial Generativa",
          text: "A Saber Generativo aplicou tecnologias de IA generativa para otimizar a gestão da informação e a criação de materiais de comunicação estratégicos, fortalecendo a marca Ritmo por Km no mercado e profissionalizando o planejamento do evento."
        },
        {
          subtitle: "Meta de Participação e Profissionalização",
          text: "O objetivo da estratégia foi profissionalizar a gestão do evento e atingir o limite de 400 participantes na próxima edição do Luau Laranjal, garantindo execução eficiente, engajamento do público e consolidação da marca no mercado de corridas de rua."
        },
      ]}
      imageSrc={ImgRitmoPorKm}
      imageAlt="Logo Ritmo por Km"
      centerImageInsteadOfTitle={true}
    />
      <Footer />
    </main>
    );
}

export default RitmoPorKmCasePage;