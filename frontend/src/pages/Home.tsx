import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 400);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const insightsData: InsightItem[] = [
    {
      id: 1,
      image: Img1,
      title: "ChatGPT foi só o começo: conheça as novas fronteiras da IA",
      link: "https://drive.google.com/file/d/1c9cwDzBdO9xYA8dF1PD4CmM-PeMIRkbo/view?usp=sharing",
    },
    {
      id: 2,
      image: Img2,
      title: "Além do ChatGPT: Os Tipos e as Tendências que Estão Redefinindo os Grandes Modelos de Linguagem (LLMs)",
      link: "https://drive.google.com/file/d/1ost6NICfDA-8Xji8SPI9pK2PvgIHcpFp/view?usp=sharing",
    },
    {
      id: 3,
      image: Img3,
      title: "O Modelo Maritaca e a Busca Brasileira pela Liderança em LLMs",
      link: "https://drive.google.com/file/d/1e0z51jynvHD0v7RvFUgbrwij6Rf3d-MC/view?usp=sharing",
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
          <InsightsSection
            title="Insights"
            items={insightsData}
            infiniteScroll={!isMobile}
          />
        </FadeInWhenVisible>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
