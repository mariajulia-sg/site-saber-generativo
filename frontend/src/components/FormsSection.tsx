import React, { useState } from "react";
import { ReactComponent as WhatsAppLogo } from "../assets/imgs/whatsapp-logo-4456.svg";

interface FormSectionProps {
  title?: string;
  bgColor?: string;         
  buttonColor?: string;
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const data = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    });

    alert("Mensagem enviada!");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  } catch (error) {
    alert("Erro ao enviar a mensagem. Tente novamente.");
    console.error(error);
  }
};


  return (
    <section className="w-full py-12 px-6 md:px-20 relative" style={{ backgroundColor: bgColor }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5FAFB] text-center font-serif">
          {title}
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(
                Object.entries({ "form-name": form.getAttribute("name")!, ...formData })
              ).toString(),
            })
              .then(() => alert("Mensagem enviada!"))
              .catch((err) => alert("Erro ao enviar: " + err));
            setFormData({ name: "", email: "", company: "", phone: "", message: "" });
          }}
          className="flex flex-col gap-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
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
      href="https://wa.me/5381550030"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-50"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppLogo className="w-16 h-16" />
    </a>

    </section>
  );
};

export default FormSection;
