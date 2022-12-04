import React from 'react'
import "./About.css"
import ME from "../../assets/perfil2.jpg"
import {FaAward} from "react-icons/fa"
import {FaFolderOpen} from "react-icons/fa"
import CTA from './CTA'

const About = () => {
  return (
    <section id='about'>
      <h2>Sobre Mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="sobre mim" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Certificações</h5>
              <ul>
              <li>
                Universidade Anhanguera - Análise e Desenvolvimento de Sistemas
              </li>
              <li>Universo BI - Microsoft Power Business Intelligence</li>
              <li>DNC - Python</li>
              <li>Rockeseat - Discover</li>
              <li>Curso Em Vídeo - JavaScript ES6</li>
              <li>Curso Em Vídeo - HTML 5 e CSS 3</li>
              <li>Bootcamp Santander FullStack Developer</li>
              <li>Udemy - React</li>
            </ul>
              
            </article>

            <article className="about_card">
              <FaFolderOpen className='about_icon'/>
              <h5>Projetos</h5>
              <small>+10 Concluidos</small>
            </article>
          </div>

          <p>
            Meu nome é Renato Fujimoto e sou um apaixonado por tecnologia e movido a desafios, sempre busquei
            elevar meus conhecimentos para que eu possa entregar o meu melhor
            em tudo que faço. Sou um aspirante a desenvolvimento fullstack,
            com foco nas linguagens React e Spring.          
          </p>

          <CTA/>

        </div>
      </div>
    </section>
  )
}

export default About