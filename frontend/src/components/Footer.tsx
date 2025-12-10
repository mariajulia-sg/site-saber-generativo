import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05A694] text-[#f0f4f8] py-8 px-6 sm:px-12 md:px-28 lg:px-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <nav className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm sm:text-base font-medium font-serif">
          <Link
            to="/cases"
            className="hover:text-white/80 transition-colors duration-200"
          >
            Cases de Sucesso
          </Link>
          <Link
            to="/insights"
            className="hover:text-white/80 transition-colors duration-200"
          >
            Insights
          </Link>
        </nav>

        <div className="text-center sm:text-right text-xs sm:text-sm text-[#f0f4f8]/80 font-serif">
          Design e desenvolvimento por{" "}
          <a
            href="https://www.linkedin.com/in/mariajulialorenzoni"
            target="_self"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors duration-200"
          >
            Maria Júlia Lorenzoni
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
