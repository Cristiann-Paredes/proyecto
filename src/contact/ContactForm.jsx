import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const servideId = "service_aht27sa"
    const templateId = "template_as5rev8"
    const templateparams = {nombre: formData.first_name + " " +formData.last_name,message: formData.message,correoDestino: formData.email}
    const userId = "tTa-zuo_HEFPjzirM"
    emailjs.send(servideId,templateId, templateparams, userId) 
      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        setError('Error al enviar el correo electrónico. Por favor, inténtelo de nuevo.');
      });
  };

  return (
    <main>
      <div className="title text-[#f5f5f5]">Contáctanos</div>
      <div className="title-info text-[#f5f5f5]">Para usuarios nuevos, preguntas y consultas.</div>

      <form onSubmit={handleSubmit} className="form text-[#f5f5f5]">
        <div className="input-group">
          <input
            type="text"
            name="first_name"
            id="first-name"
            placeholder="Nombre"
            value={formData.first_name}
            onChange={handleChange}
          />
          <label htmlFor="first-name">Nombre </label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="last_name"
            id="last-name"
            placeholder="Apellido"
            value={formData.last_name}
            onChange={handleChange}
          />
          <label htmlFor="last-name">Apellido</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Correo electrónico</label>
        </div>

        <div className="textarea-group">
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="message">Pregunta o Comentario</label>
        </div>

        <div className="button-div text-white">
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </form>

      {error && <div className="error-message text-red-500">{error}</div>}
    </main>
  );
};

export default ContactUs;

