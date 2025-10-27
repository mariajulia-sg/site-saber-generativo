import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imgs/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-inter relative">
          <Link to="/" className="hover:text-[#05A694] transition-colors">Home</Link>

        <div className="relative group">
          <span className="hover:text-[#05A694] cursor-pointer transition-colors">
            Portfolio
          </span>

          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-200 z-50">
            <Link 
              to="/consultoria" 
              className="block px-4 py-2 hover:bg-[#F0FDF9] rounded-lg transition-colors"
            >
              Consultoria
            </Link>
            <Link 
              to="/desenvolvimento" 
              className="block px-4 py-2 hover:bg-[#F0FDF9] rounded-lg transition-colors"
            >
              Desenvolvimento
            </Link>
            <Link 
              to="/treinamentos" 
              className="block px-4 py-2 hover:bg-[#F0FDF9] rounded-lg transition-colors"
            >
              Treinamentos
            </Link>
          </div>
        </div>



          <Link to="/cases" className="hover:text-[#05A694] transition-colors">Cases de Sucesso</Link>
          <Link to="/filosofia" className="hover:text-[#05A694] transition-colors">Filosofia</Link>
          <Link to="/insights" className="hover:text-[#05A694] transition-colors">Insights</Link>
          <Link to="/quem-somos" className="hover:text-[#05A694] transition-colors">Quem Somos</Link>
          <Link to="/contato" className="hover:text-[#05A694] transition-colors">Contato</Link>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-[#05A694] focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pt-3 pb-6 space-y-4 text-gray-700 font-medium text-lg border-t border-gray-100">
          <Link to="/" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Home</Link>

          {/* Portfolio Mobile com submenu */}
          <div className="space-y-2">
            <span 
              className="block cursor-pointer font-semibold flex justify-between items-center"
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            >
              Portfolio
              <span>{isPortfolioOpen ? "▲" : "▼"}</span>
            </span>

            {isPortfolioOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/consultoria" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Consultoria</Link>
                <Link to="/desenvolvimento" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Desenvolvimento</Link>
                <Link to="/treinamentos" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Treinamentos</Link>
              </div>
            )}
          </div>

          <Link to="/cases" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Cases de Sucesso</Link>
          <Link to="/filosofia" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Filosofia</Link>
          <Link to="/insights" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Insights</Link>
          <Link to="/quem-somos" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Quem Somos</Link>
          <Link to="/contato" className="block hover:text-[#05A694]" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
