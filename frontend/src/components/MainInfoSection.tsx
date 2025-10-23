import React, { useRef, useEffect, useState } from "react";
import { FadeInImageWhenVisible } from "./ScrollAnimations";

interface MainInfoSectionProps {
  bgColor?: string;
  title: string;
  sections: {
    subtitle?: string;
    text: string;
  }[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  hideImageOnMobile?: boolean;
  fadeInOnVisible?: boolean;
}

const MainInfoSection: React.FC<MainInfoSectionProps> = ({
  bgColor = "#F9FBFC",
  title,
  sections,
  imageSrc,
  imageAlt,
  reverse = false,
  hideImageOnMobile = true,
  fadeInOnVisible = false,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!fadeInOnVisible || !imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [fadeInOnVisible]);

  return (
    <section
      className="w-full py-12 px-6 sm:px-10 md:px-20"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-start md:items-center justify-between gap-8 md:gap-16`}
      >
        <div className="md:w-1/2 font-serif text-left md:pl-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-8 sm:mb-10">
            {title}
          </h2>

          <div className="space-y-8 sm:space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  {section.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-sans">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {imageSrc && (
          <div
            className={`md:w-1/2 flex justify-center ${
              hideImageOnMobile ? "hidden md:flex" : ""
            }`}
          >
            {fadeInOnVisible ? (
              <FadeInImageWhenVisible>
                <img
                  src={imageSrc}
                  alt={imageAlt || "Imagem ilustrativa"}
                  className="w-full max-w-[520px] rounded-2xl object-contain"
                  style={{ maxHeight: "500px" }}
                />
              </FadeInImageWhenVisible>
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt || "Imagem ilustrativa"}
                className="w-full max-w-[520px] rounded-2xl object-contain"
                style={{ maxHeight: "500px" }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainInfoSection;
