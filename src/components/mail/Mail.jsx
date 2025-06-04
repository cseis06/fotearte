import React, { useState } from 'react';
import './mail.css';
import emailjs from '@emailjs/browser';

const Mail = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    tema: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.nombre) newErrors.nombre = 'El Nombre no puede estar vacío';
    if (!form.apellido) newErrors.apellido = 'El Apellido no puede estar vacío';
    if (!form.celular) newErrors.celular = 'El Celular no puede estar vacío';
    else if (!/^\d{9,10}$/.test(form.celular)) newErrors.celular = 'Ingrese un número válido (máx. 10 dígitos)';
    if (!form.email) newErrors.email = 'El E-Mail no puede estar vacío';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Formato de email inválido';
    if (!form.tema) newErrors.tema = 'El Tema no puede estar vacío';
    if (!form.mensaje) newErrors.mensaje = 'El Mensaje no puede estar vacío';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSuccess('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ENVÍO
    emailjs.send(
      'service_b59e5p4',     // service key
      'template_c10s7qq',    // template key
      form,
      'kJt5zG7SwgWGRLxuk'      // public key
    ).then(() => {
      setSuccess('Mensaje enviado con éxito.');
      setForm({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        tema: '',
        mensaje: ''
      });

      console.log('Formulario enviado:', form);

      setErrors({});
    }).catch(() => {
      setSuccess('Error al enviar el mensaje. Intente de nuevo.');
    });
  };

  return (
    <section className='mail'>
      <h1>Ponete en contacto con nosotros</h1>
      <span>¡Nos encantaría aclarar todas tus dudas!</span>
      <form onSubmit={handleSubmit} className='mail-form'>
        <div className='mail-inputs'>
          <div className='input-group-fields'>
            <input name="nombre" value={form.nombre} onChange={handleChange} type="text" placeholder='Nombre' className='field name' />
            {errors.nombre && <p>{errors.nombre}</p>}

            <input name="apellido" value={form.apellido} onChange={handleChange} type="text" placeholder='Apellido' className='field lastname' />
            {errors.apellido && <p>{errors.apellido}</p>}
          </div>

          <div className='input-group-fields'>
            <input name="celular" value={form.celular} onChange={handleChange} type="tel" placeholder='Celular' className='field phone' />
            {errors.celular && <p>{errors.celular}</p>}

            <input name="email" value={form.email} onChange={handleChange} type="text" placeholder='E-Mail' className='field email' />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className='input-group-subject'>
            <input name="tema" value={form.tema} onChange={handleChange} type="text" placeholder='Tema' className='field subject' />
            {errors.tema && <p>{errors.tema}</p>}
          </div>

          <div className='input-group-message'>
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder='Mensaje' className='field message' />
            {errors.mensaje && <p>{errors.mensaje}</p>}
          </div>
        </div>

        <button type="submit" className='send-mail'>Enviar</button>
        {success && <p>{success}</p>}
      </form>
    </section>
  );
};

export default Mail;
