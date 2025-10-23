import React, { useEffect } from "react";

interface ModalSectionProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ModalSection: React.FC<ModalSectionProps> = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, 20000);

    return () => clearTimeout(timer); 
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
  <div className="fixed font-sans inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-[#df7721] rounded-lg shadow-xl p-6 max-w-sm w-full text-center relative">
      <button
        className="absolute top-4 right-4 text-[#F5FAFB] hover:text-gray-200 font-bold text-3xl"
        onClick={onClose}
        aria-label="Fechar modal"
      >
        ×
      </button>

      <p className="text-white text-lg">{message}</p>
    </div>
  </div>
);
};

export default ModalSection;
