import React, { useState } from 'react';

const ContactUsComponent = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoLink = `mailto:parktracker.contact@gmail.com?subject=Mensaje de ${name} (${email})&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container m-2 p-5 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
        <p className="text-gray-700 mb-6">
          ¿Tienes preguntas, sugerencias o quieres colaborar? Puedes enviarnos un mensaje directamente usando el siguiente formulario.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder=''
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Mensaje</label>
            <textarea
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">También puedes contactarme por:</h2>
        <p className="text-gray-700">
          Correo directo: <a href="mailto:parktracker.contact@gmail.com" className="text-blue-600 underline">parktracker.contact@gmail.com</a><br />
          Repositorio del proyecto: <a href="https://github.com/albertocmr/ProyectoTFG" target="_blank" className="text-blue-600 underline">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUsComponent;
