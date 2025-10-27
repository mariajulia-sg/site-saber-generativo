import React from "react";
import FilosofiaImg from "../assets/imgs/Frame 1321317489.png";
import MainInfoSection from "./MainInfoSection";

const PhilosophySection: React.FC = () => {
   return (
    <MainInfoSection
      title="Onde a tecnologia se encontra com a Filosofia"
      sections={[
        {
          subtitle: "Empatia Humana",
          text: "Acreditamos que o poder da IA Generativa está em ir além da automação, unindo tecnologia e empatia para criar soluções que realmente conectem pessoas.",
        },
        {
          subtitle: "Mente Estratégica",
          text: "Cada projeto é uma chance de transformar complexidade em conhecimento e ações estratégicas que geram valor duradouro.",
        },
      ]}
      
      imageSrc={FilosofiaImg}
      imageAlt="Filosofia da empresa"
      bgColor="#F9FBFC"
      fadeInOnVisible={true}
      
    />
  );
};

export default PhilosophySection;
