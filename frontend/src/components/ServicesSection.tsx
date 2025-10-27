import React from "react";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  { title: "Consultoria Estratégica", description: "Oferecemos consultoria personalizada para otimizar seus processos.", link: "/consultoria" },
  { title: "Desenvolvimento de Soluções", description: "Criação de soluções web e mobile de alta performance.", link: "/desenvolvimento" },
  { title: "Treinamento Personalizado", description: "Capacitação e workshops para sua equipe.", link: "/treinamentos" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-[#F9FBFC] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center sm:text-left mb-8">
          Portfólio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-[#F59220] px-6 py-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center block"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[#F7F7F7] text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
