import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ContactPageProps {
  bgColor?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  hideImageOnMobile?: boolean;
  email?: string;
  linkedin?: string;
  phone?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({
  bgColor = "#F9FBFC",
  title = "Entre em Contato",
  description = "Estamos sempre abertos para novas ideias, parcerias e conversas sobre o futuro da IA Generativa.",
  imageSrc,
  imageAlt = "Equipe Saber Generativo",
  reverse = false,
  hideImageOnMobile = true,
  email = "contato@sabergenerativo.com",
  linkedin = "https://www.linkedin.com/company/saber-generativo/",
  phone = "+55 (11) 99999-9999",
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FBFC]">
      <Header />

      <main
        className="flex-grow w-full py-16 px-6 sm:px-10 md:px-20"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={`max-w-7xl mx-auto flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-start md:items-center justify-between gap-10 md:gap-16`}
        >
          {/* Bloco de texto */}
          <div className="md:w-1/2 font-serif text-left md:pl-4 mt-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6">
              {title}
            </h1>

            <p className="text-gray-600 mb-10 leading-relaxed text-base sm:text-lg font-sans">
              {description}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Mail className="w-5 h-5" />
                <span>{email}</span>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>{linkedin.replace("https://", "")}</span>
              </a>

              {/* Telefone */}
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Phone className="w-5 h-5" />
                <span>{phone}</span>
              </a>
            </div>
          </div>

          {/* Imagem opcional */}
          {imageSrc && (
            <div
              className={`md:w-1/2 flex justify-center ${
                hideImageOnMobile ? "hidden md:flex" : ""
              }`}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full max-w-[520px] rounded-2xl object-contain"
                style={{ maxHeight: "480px" }}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
