import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      {/* Link para o perfil do LinkedIn */}
      <a href="https://www.linkedin.com/in/marcosmoraisjr/" target="_blank" rel="noreferrer">
        <BsLinkedin/>
      </a>
      {/* Link para o perfil do GitHub */}
      <a href="https://github.com/marcosmoraisjr" target="_blank" rel="noreferrer">
        <FaGithub/>
      </a>
      {/* Link para o WhatsApp com uma mensagem pré-definida */}
      <a href="https://api.whatsapp.com/send/?phone=5573981023484&text&app_absent=0" target="_blank" rel="noreferrer">
        <BsWhatsapp/>
      </a>
    </div>
  )
}

export default HeaderSocial;
