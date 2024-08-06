import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
      )
      .then(
        () => {
          console.log('Mensaje enviado')
        },
        (error) => {
          console.error(error)
        }
      )
  }
  return (
    <div className='contact'>
      <div className='info-contact'>
        <h3>Contactos</h3>
        <div className='contact-icon'>
          <IoLogoWhatsapp />
          <p>2383033841</p>
        </div>
        <div className='contact-icon'>
          <MdEmail />
          <p>2383033841</p>
        </div>
        <div className='contact-icon'>
          <FaLocationDot />
          <p>Tehuacán, Puebla</p>
        </div>
        <div className='contact-icon'>
          <p>Hola, Buen dia espero que estes interesado respondere lo mas rapido posible GRACIAS.</p>
        </div>
      </div>
      <div className='form-contact'>
        <form ref={form} onSubmit={sendEmail} >
          <h3>Contacto</h3>
          <div className='inputs'>
            <input type='text' name='user_name' placeholder='Nombre' required />
          </div>
          <div className='inputs'>
            <input type='email' name='user_email' placeholder='Email' required />
          </div>
          <div className='inputs'>
            <input type="text" name='user_phone' placeholder='Número de teléfono' required />
          </div>
          <div className='inputs'>
            <textarea type='text' name="message" placeholder='Mensaje' required />
          </div>
          <div className='send'>
            <input type="submit" value='Enviar' id='input-submit' className='send-button' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs