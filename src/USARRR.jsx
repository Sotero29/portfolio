import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='user_name' placeholder='Nombre' required/>
        <input type='email' name='user_email' placeholder='Email' required/>
        <input type="number" name='user_phone' placeholder='Numero telefonico' required/>
        <textarea type='text' name="message" placeholder='Mensaje' required/>
        <input type="submit" value='Enviar' id='input-submit' />
      </form>
    </div>
  )
}

export default ContactUs