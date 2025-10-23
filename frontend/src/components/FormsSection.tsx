import React, { useState } from "react";

interface FormSectionProps {
  title?: string;
  bgColor?: string;         // cor de fundo da seção
  buttonColor?: string;     // cor do botão
  buttonText?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title = "O que podemos construir juntos?",
  bgColor = "#FAFDFF",
  buttonColor = "#FBAC50",
  buttonText = "CONVERSAR",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para API ou serviço de email
    console.log(formData);
    alert("Mensagem enviada!");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <section className="w-full py-12 px-6 md:px-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5FAFB] text-center font-serif">
          {title}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
    </section>
  );
};

export default FormSection;
