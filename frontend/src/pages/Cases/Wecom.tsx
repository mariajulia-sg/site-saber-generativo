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
            text: "A Wecom, consolidada como uma integradora, mantenedora e distribuidora de sistemas de comunicação unificada para o mercado corporativo brasileiro, emerge como um proeminente case de sucesso em sua jornada de crescimento acelerado, contando com a Consultoria Estratégica da Saber Generativo para alinhar inovação e organização."
          },
          {
            subtitle: "Estratégia de Inteligência Artificial",
            text: "Atuando como o elo entre estratégia, inovação e operação, a consultoria se dedicou à elaboração da estratégia e do roadmap de Inteligência Artificial (IA), o tema mais discutido na empresa, traduzindo o potencial da IA em soluções reais e mensuráveis, como a proposição de Provas de Conceito (PoCs) estratégicas — por exemplo, o Assistente de Reunião Inteligente e o Chatbot Omnichannel."
          },
          {
            subtitle: "O Projeto “The Migration”",
            text: "O trabalho intensivo focou em sustentar o projeto central “The Migration”, uma estratégia de transformação digital para migrar a comunicação dos clientes para a web, enfatizando a soberania de dados — garantida por infraestrutura de colocation (UXCloud/Proxmox) e pela priorização de LLMs de código aberto auto-hospedados para dados sensíveis —, como principal diferencial competitivo, em conformidade com LGPD e GDPR."
          },
          {
            subtitle: "Gestão Estratégica e Cultura Organizacional",
            text: "A consultoria utilizou sua expertise para estruturar a gestão, adotando um modelo de Gestão Estratégica Ágil com ciclos trimestrais voltados a foco e resultados, enquanto atuava para superar o desafio interno de inércia cultural e promover a adoção plena da solução myApps, transformando-a na Prova de Conceito Definitiva para a credibilidade comercial da Wecom."
          },
          {
            subtitle: "Base de Conhecimento Inteligente",
            text: "Como parte da estratégia de inovação contínua, a Saber Generativo apoiou a construção de uma base de conhecimento inteligente com mais de 112 conteúdos, utilizando ferramentas como Gemini e NotebookLM, reforçando o aprendizado organizacional e o compartilhamento de conhecimento estratégico."
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