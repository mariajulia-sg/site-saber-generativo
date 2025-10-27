import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsightsSection, { InsightItem } from "../components/InsightsSection";
import Img1 from "../assets/imgs/blog1.png";
import Img2 from "../assets/imgs/blog2.png";
import Img3 from "../assets/imgs/blog3.png"; 

const InsightsPage: React.FC = () => {
  
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
    <main className="pt-20" >
      <Header />
      <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5 mb-5">Insights</h1>
      <InsightsSection items={insightsData} infiniteScroll={false} />
      <Footer />
    </main>
  );
};

export default InsightsPage;
