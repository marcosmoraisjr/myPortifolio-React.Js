import React from 'react'
import "./Footer.css"
import{BsInstagram} from "react-icons/bs"
import{BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>@tech.fujimoto</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#service">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/tech.fujimoto/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/renato-fujimoto-1321b71b0/"><BsLinkedin/></a>
        <a href="https://github.com/Renatofujimoto"><BsGithub/></a>
      </div>
      
    </footer>
  )
}

export default Footer