import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Futuro envio via API
    console.log(formData);
    alert("Mensagem enviada! (simulação)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
        <form
          className="max-w-2xl mx-auto bg-white p-8 rounded shadow"
          onSubmit={handleSubmit}
        >
          {/* Nome */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mensagem */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
