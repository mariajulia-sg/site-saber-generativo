import React from "react";

export interface InsightItem {
  id: number | string;
  image: string;
  title: string;
  link: string;
  target?: "_blank" | "_self"; 
}

interface InsightsSectionProps {
  title?: string;
  items: InsightItem[];
  bgColor?: string;
  infiniteScroll?: boolean;
}

const InsightsSection: React.FC<InsightsSectionProps> = ({
  title,
  items,
  bgColor = "#F9FBFC",
  infiniteScroll = false,
}) => {
  const displayItems = [...items, ...items];

  return (
    <section
      className="w-full px-6 sm:px-12 md:px-28 lg:px-30 mb-10 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] font-serif">
              {title}
            </h2>
          </div>
        )}

        {infiniteScroll ? (
          <div className="overflow-hidden w-full">
            <div className="flex animate-infinite-scroll">
              {displayItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 sm:w-96 mx-4">

                  <a
                    href={item.link}
                    target={item.target ?? "_self"}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="block overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 sm:h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  <a
                    href={item.link}
                    target={item.target ?? "_self"}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="mt-4 block text-lg font-semibold text-[#0F172A] font-serif leading-snug hover:text-[#1E3A8A] transition-colors duration-200"
                  >
                    {item.title}
                  </a>

                </div>
              ))}
            </div>
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col items-start">

                <a
                  href={item.link}
                  target={item.target ?? "_self"}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="w-full block overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </a>

                <a
                  href={item.link}
                  target={item.target ?? "_self"}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="mt-4 block text-base sm:text-lg md:text-xl font-semibold text-[#0F172A] font-serif leading-snug hover:text-[#1E3A8A] transition-colors duration-200"
                >
                  {item.title}
                </a>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;
