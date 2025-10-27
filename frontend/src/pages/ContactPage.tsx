import React from "react";
import { Mail, Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormSection from "../components/FormsSection";

interface ContactPageProps {
  bgColor?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  email?: string;
  phone?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({
  bgColor = "#F9FBFC",
  title = "Entre em Contato",
  description = "Estamos sempre abertos para novas ideias, parcerias e conversas sobre o futuro da Inteligência Artificial.",
  imageSrc,
  imageAlt = "Equipe Saber Generativo",
  email = "lftm.iag@gmail.com",
  phone = "+55 53 9115-3651",
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FBFC]">
      <Header />

      <main
        className="flex-grow w-full py-10 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-3xl w-full mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#0F172A] mb-6">
            {title}
          </h1>

          <p className="text-gray-600 mb-10 leading-relaxed text-base sm:text-lg font-sans">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
              <span>{email}</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
          </div>
        </div>

        {/* Formulário centralizado */}
        <div className="w-full max-w-3xl">
          <FormSection
            title="O que podemos construir juntos?"
            buttonText="Conversar"
            titleColor="#161515"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
