import React, { useRef } from "react";
import Header from "../components/Header";
import BannerSection from "../components/BannerSection";
import SloganSection from "../components/SloganSection";
import ServicesSection from "../components/ServicesSection";
import InfoSection from "../components/InfoSection";
import PhilosophySection from "../components/PhilosophySection";
import CasesSection from "../components/CasesSection";
import InsightsSection, { InsightItem } from "../components/InsightsSection";
import Footer from "../components/Footer";
import Img1 from "../assets/imgs/blog1.png";
import Img2 from "../assets/imgs/blog2.png";
import Img3 from "../assets/imgs/blog3.png"; 
import { FadeInWhenVisible } from "../components/ScrollAnimations";
const Home: React.FC = () => {

    const insightsData: InsightItem[] = [
    {
      id: 1,
      image: Img1,
      title: "ChatGPT foi só o começo: conheça as novas fronteiras da IA",
      link: "https://docs.google.com/document/d/1HOSYbDiLmP0m0K7HPWYD4aYFpVJDjOEvcJOOFNpGwe8/edit?tab=t.0",
    },
    {
      id: 2,
      image: Img2,
      title: "Titulo 2",
      link: "https://seudominio.com/blog/design-e-tecnologia",
    },
    {
      id: 3,
      image: Img3,
      title: "Titulo 3",
      link: "https://seudominio.com/blog/empatia-na-inovacao",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16 mb-12">
        <BannerSection />
        <SloganSection />
        <ServicesSection />
        <InfoSection />

        <PhilosophySection />
        
        <FadeInWhenVisible>
          <CasesSection />
        </FadeInWhenVisible>

    <FadeInWhenVisible>
      <InsightsSection title="Insights" items={insightsData} infiniteScroll={true}/>
    </FadeInWhenVisible>
      </main>
        <Footer />

    </div>
  );
};

export default Home;
