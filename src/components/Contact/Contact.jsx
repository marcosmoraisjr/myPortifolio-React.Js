import React from 'react'
import"./Contact.css"
import {MdEmail} from "react-icons/md"
import{BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contatos</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mmstec@gmail.com</h5>
            <a href="mailto:mmstec@gmail.com" target="_blank" rel="noreferrer">Enviar email</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(99) 99999-9999</h5>
            <a href="https://api.whatsapp.com/send/?phone=5573981023484&text&app_absent=0" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>

        </div>


        {/* fim das opcoes do contato */}
        <form action="">
          <input type="text"  name='name' placeholder='Digite seu nome'required/>
          <input type="text"  name='email' placeholder='Digite seu email'required/>
          <textarea name='message' rows="7" placeholder="Digite sua mensagem" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
