import React from "react";

interface CardItem {
  title: string;
  description: string; 
}

interface InfoGridSectionProps {
  title: string;
  cards: CardItem[];
  bgColor?: string;
  cardColor?: string;
}

const InfoGridSection: React.FC<InfoGridSectionProps> = ({
  title,
  cards,
  bgColor = "bg-[#FAFDFF]",
  cardColor = "bg-[#FBAC50]",
}) => {
  return (
  <section
  className="w-full py-12 pl-[7.5rem] pr-[8.5rem]"
  style={{ backgroundColor: bgColor }}
>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-snug font-serif max-w-md text-left">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full md:w-[70%]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${cardColor} text-[#0D0D0D] font-sans rounded-lg p-8 shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1`}
            >
              <h3 className="text-3xl font-sans font-bold mb-2 text-[#174980] transition-transform duration-300 ease-in-out transform hover:scale-110">
                {String(index + 1).padStart(2, "0")}.
              </h3>
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
