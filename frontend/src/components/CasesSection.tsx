import React from "react";
import Img1 from "../assets/imgs/ImgWecom.png";
import Img2 from "../assets/imgs/ritmoPorKm.png";

const CasesSection: React.FC = () => {
  const cases = [
    {
      id: 1,
      image: Img1,
      title: "Wecom",
      text: "Transformando a comunicação corporativa com estratégia e IA.",
      link: "/cases/wecom",
    },
    {
      id: 2,
      image: Img2,
      title: "Ritmo por KM",
      text: "Profissionalização e inovação na gestão de eventos esportivos",
      link: "/cases/ritmo-por-km",
    },
  ];

  return (
    <section className="w-full bg-[#F9FBFC] mt-5 mb-10 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] mb-8 sm:mb-5 font-serif text-left">
          Cases de Sucesso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {cases.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-xl"
              />
              <div className="p-4 sm:p-6 text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0F172A] mb-1 sm:mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
