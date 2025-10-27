import React, { useRef, useEffect, useState } from "react";
import { FadeInImageWhenVisible } from "./ScrollAnimations";

interface MainInfoSectionProps {
  bgColor?: string;
  title?: string;
  sections: {
    subtitle?: string;
    text: string;
    cta?: {
      text: string;
      link: string;
    };
  }[];
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string; // nova prop para vídeo
  reverse?: boolean;
  hideImageOnMobile?: boolean;
  fadeInOnVisible?: boolean;
  centerImageInsteadOfTitle?: boolean;
}

const MainInfoSection: React.FC<MainInfoSectionProps> = ({
  bgColor = "#F9FBFC",
  title,
  sections,
  imageSrc,
  imageAlt,
  videoSrc,
  reverse = false,
  hideImageOnMobile = true,
  fadeInOnVisible = false,
  centerImageInsteadOfTitle = false,
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
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          reverse && !centerImageInsteadOfTitle ? "md:flex-row-reverse" : ""
        } items-start justify-between gap-8 md:gap-16 ${
          centerImageInsteadOfTitle ? "items-center" : ""
        }`}
      >
        <div
          className={`font-serif flex flex-col ${
            centerImageInsteadOfTitle
              ? "items-center text-center w-full max-w-3xl mx-auto"
              : "md:w-1/2 items-start text-left md:pl-4"
          }`}
        >
          {centerImageInsteadOfTitle && imageSrc ? (
            <div className="flex justify-center mb-6 w-full">
              {fadeInOnVisible ? (
                <FadeInImageWhenVisible>
                  <img
                    src={imageSrc}
                    alt={imageAlt || "Imagem ilustrativa"}
                    className="w-full max-w-[420px] rounded-2xl object-contain"
                    style={{ maxHeight: "420px" }}
                  />
                </FadeInImageWhenVisible>
              ) : (
                <img
                  src={imageSrc}
                  alt={imageAlt || "Imagem ilustrativa"}
                  className="w-full max-w-[420px] rounded-2xl object-contain"
                  style={{ maxHeight: "420px" }}
                />
              )}
            </div>
          ) : (
            title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-8 sm:mb-10 text-center md:text-left">
                {title}
              </h2>
            )
          )}

          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                {section.subtitle && (
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-sans mb-4">
                  {section.text}
                </p>

                {section.cta && (
                  <a
                    href={section.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[#174980] text-white font-semibold rounded-lg shadow hover:bg-[#0F1F5A] transition-colors duration-200"
                  >
                    {section.cta.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {!centerImageInsteadOfTitle && (imageSrc || videoSrc) && (
          <div
            className={`md:w-1/2 flex justify-center ${
              hideImageOnMobile ? "hidden md:flex" : ""
            }`}
          >
            {videoSrc ? (
              <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="315"
                  src={videoSrc}
                  title={title || "Vídeo"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            ) : fadeInOnVisible ? (
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
