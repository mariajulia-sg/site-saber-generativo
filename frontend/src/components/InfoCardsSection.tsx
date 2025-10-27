import React from "react";

export interface InfoCardItem {
  title: string;
  subtitle?: string;
  function?: string;
  description: string | React.ReactNode;
  imageSrc?: string;
}


interface InfoCardsSectionProps {
  items: InfoCardItem[];
  columns: number; 
  bgColor?: string;        
  cardBgColor?: string;    
  titleColor?: string;     
  subtitleColor?: string;  
  textColor?: string;      
}

const InfoCardsSection: React.FC<InfoCardsSectionProps> = ({
  items,
  columns,
  bgColor = "#F9FBFC",
  cardBgColor = "#FFFFFF",
  titleColor = "#000000",
  subtitleColor = "#252525",
  textColor = "#1f1f1f",
}) => {
  return (
    <section className="w-full py-12 px-6 sm:px-12" style={{ backgroundColor: bgColor }}>
      <div className={`grid grid-cols-1 sm:grid-cols-${columns} gap-6 max-w-7xl mx-auto`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-200`}
            style={{ backgroundColor: cardBgColor }}
          >
            {item.imageSrc && (
              <div className="flex justify-center mb-4">
                <img src={item.imageSrc} alt={item.title} className="w-16 h-16 object-contain rounded-full" />
              </div>
            )}
            <h3 className="text-2xl text-center font-bold mb-2" style={{ color: titleColor }}>
              {item.title}
            </h3>
            {item.subtitle && (
              <h4 className="text-xl text-center font-semibold mb-4" style={{ color: subtitleColor }}>
                {item.subtitle}
              </h4>
            )}
            {item.function && (
              <h5 className="text-md text-center font-medium mb-4 italic" style={{ color: subtitleColor }}>
                {item.function}
              </h5>
            )}
            <p className="text-justify leading-relaxed" style={{ color: textColor }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCardsSection;
