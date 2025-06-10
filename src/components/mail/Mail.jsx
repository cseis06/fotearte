import React, { useState } from 'react';
import Swal from 'sweetalert2';
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
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo muy pronto.',
        confirmButtonColor: '#ee440f',
        customClass: {
          popup: 'custom-swal'
        }
      });

      setForm({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        tema: '',
        mensaje: ''
      });

      setErrors({});
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Ocurrió un problema. Intenta de nuevo más tarde.',
        confirmButtonColor: '#ff6b35',
        customClass: {
          popup: 'custom-swal'
        }
      });
    });
  };

  return (
    <section className='mail'>
      <h1>Ponete en contacto con nosotros</h1>
      <span>¡Nos encantaría aclarar todas tus dudas!</span>
      <form onSubmit={handleSubmit} className='mail-form'>
        <div className='mail-inputs'>
          <div className='input-group-fields'>
            <div className='input-wrapper'>
              {errors.nombre && <p className="error-message">{errors.nombre}</p>}
              <input name="nombre" value={form.nombre} onChange={handleChange} type="text" placeholder="Nombre" className={`name ${errors.nombre ? 'field-error' : 'field'}`} />
            </div>

            <div className='input-wrapper'>
              {errors.apellido && <p className="error-message">{errors.apellido}</p>}
              <input name="apellido" value={form.apellido} onChange={handleChange} type="text" placeholder="Apellido" className={`lastname ${errors.apellido ? 'field-error' : 'field'}`} />
            </div>
          </div>

          <div className='input-group-fields'>
            <div className='input-wrapper'>
              {errors.celular && <p className="error-message">{errors.celular}</p>}
              <input name="celular" value={form.celular} onChange={handleChange} type="tel" placeholder='Celular' className={`phone ${errors.nombre ? 'field-error' : 'field'}`} />
            </div>
            <div className='input-wrapper'>
              {errors.email && <p className="error-message">{errors.email}</p>}
              <input name="email" value={form.email} onChange={handleChange} type="text" placeholder='E-Mail' className={`email ${errors.nombre ? 'field-error' : 'field'}`} />
            </div>
          </div>

          <div className='input-group-subject'>
            {errors.tema && <p className="error-message">{errors.tema}</p>}
            <input name="tema" value={form.tema} onChange={handleChange} type="text" placeholder='Tema' className={`subject ${errors.nombre ? 'field-error' : 'field'}`} />
            
          </div>

          <div className='input-group-message'>
            {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder='Mensaje' className={`message ${errors.nombre ? 'field-error' : 'field'}`} />
          </div>
        </div>

        <button type="submit" className='send-mail'>Enviar</button>
      </form>
    </section>
  );
};

export default Mail;
