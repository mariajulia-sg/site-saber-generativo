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
    <main className="pt-20" >
      <Header />
      <h1 className="text-4xl text-[#0F172A] font-serif font-bold text-center mt-5 mb-5">Insights</h1>
      <InsightsSection items={insightsData} infiniteScroll={false} />
      <InsightsSection items={insightsData} infiniteScroll={false} />
      <InsightsSection items={insightsData} infiniteScroll={false} />
      <InsightsSection items={insightsData} infiniteScroll={false} />

      <Footer />
    </main>
  );
};

export default InsightsPage;
