import React, { useState } from "react";
import ModalSection from "./ModalSection";

interface NewsletterFormProps {
  title?: string;
  bgColor?: string;
  buttonColor?: string;
  buttonText?: string;
  titleColor?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  title = "Inscreva-se em nossa newsletter",
  bgColor = "#FAFDFF",
  buttonColor = "#FBAC50",
  buttonText = "Inscreva-se",
  titleColor = "#F5FAFB",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "bot-field": "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return; 

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "newsletter",
          ...formData,
        }).toString(),
      });

      setFormData({ name: "", email: "", "bot-field": "" });
      setModalMessage("Inscrição realizada com sucesso!");
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      setModalMessage("Erro ao enviar. Tente novamente.");
      setModalOpen(true);
    }
  };

  return (
    <section
      className="w-full py-12 px-6 md:px-20 relative"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-md mx-auto flex flex-col gap-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold font-serif"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="hidden" name="bot-field" value={formData["bot-field"]} />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            required
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      <ModalSection
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </section>
  );
};

export default NewsletterForm;
