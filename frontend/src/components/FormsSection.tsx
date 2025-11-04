import React, { useState } from "react";
import { ReactComponent as WhatsAppLogo } from "../assets/imgs/whatsapp-logo-4456.svg";
import ModalSection from "./ModalSection";

interface FormSectionProps {
  title?: string;
  bgColor?: string;
  buttonColor?: string;
  buttonText?: string;
  titleColor?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title = "O que podemos construir juntos?",
  bgColor = "#FAFDFF",
  buttonColor = "#FBAC50",
  buttonText = "Conversar",
  titleColor = "#F5FAFB",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    "bot-field": "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData["bot-field"]) return; // bloqueio de bots

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        "bot-field": "",
      });
      setModalMessage("Mensagem enviada com sucesso!");
      setModalOpen(true);
    } catch (err) {
      setModalMessage("Erro ao enviar a mensagem. Tente novamente.");
      setModalOpen(true);
      console.error(err);
    }
  };

  return (
    <section
      className="w-full py-12 px-6 md:px-20 relative"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* cor do título personalizada */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center font-serif"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" value={formData["bot-field"]} />

          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Empresa (opcional)"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone"
              required
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[160px]"
          />

          <button
            type="submit"
            className="px-6 py-4 rounded-lg font-semibold text-white hover:brightness-90 transition-colors"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>

      <a
        href="https://wa.me/53991153651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-50"
        aria-label="Conversar no WhatsApp"
      >
        <WhatsAppLogo className="w-16 h-16" />
      </a>

      <ModalSection
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </section>
  );
};

export default FormSection;
