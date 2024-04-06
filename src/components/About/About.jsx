import React from 'react'
import "./About.css"
import ME from "../../assets/perfil.jpg"
//import {FaAward} from "react-icons/fa"
//import {FaFolderOpen} from "react-icons/fa"
import CTA from './CTA'



const About = () => {
  return (
    <section id='about'>
      <h2>+Sobre Mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="sobre mim" />
          </div>
        </div>

        <div className="about_content">
          
          
          <div className="about_cards">
            
        

            <p>
            <br />🌟 Sou Desenvolvedor Web especializado em C#, ASP.NET e WebForms, com proficiência em Python, PHP e bancos de dados como SQL Server e Oracle.
            <br />👨‍🎓 Com um mestrado em Ciência da Computação, pós-graduação em Gestão de TI e bacharel em Sistemas de Informação, estou preparado para enfrentar os desafios mais complexos do desenvolvimento de software.
            <br />🚀 Ao longo de mais de duas décadas, tenho liderado e contribuído para o desenvolvimento de soluções inovadoras em diversos setores, incluindo varejo, indústria, educação e saúde.
            <br />💡 Sou reconhecido por minha abordagem proativa, criatividade e paixão pelo trabalho em equipe, características que me permitem superar expectativas e entregar resultados excepcionais.
            </p>

             {/*}<p>
            🇧🇷 Eu sou Marcos Morais, desenvolvedor especialista em Web, com experiência em C#, ASP.NET e WebForms, além de proficiência em Python, PHP e bancos de dados como SQL Server, Oracle.
            Possuo mestrado em Ciência da Computação, pós-graduação em Gestão de TI e bacharel em sistemas de informação. Tenho acumulado mais de duas décadas de experiências no desenvolvimento de soluções em informática nos setores de varejo, indústria, educação e saúde.
            Dedicado, amo trabalhar com desenvolvimento de sistemas aplicando minha proatividade, criatividade e prazer pelo trabalho em equipe.
            {/*}

            {/*}<p>
              <br />👋🏻 Saudações!
              <br />
              <br />🚀 Eu sou Marcos Morais, apaixonado pela transformação de ideias em soluções tecnológicas impactantes.
              <br />🎓 Possuo mestrado em Ciência da Computação e pós-graduação em Gestão de TI, acumulando mais de uma década de experiência no desenvolvimento de soluções em informática nos setores de varejo, indústria, educação e saúde.
              <br />💼 Tenho habilidades técnicas sólidas em C#, Python, .NET, ASP.NET, PHP, HTML, CSS, JavaScript, Oracle, SQL Server, MySQL e NoSQL, com experiência em sistemas ERP como Protheus e Winthor da TOTVS.
              <br />🌟 Destaco-me por competências como comunicação eficaz, trabalho em equipe colaborativo e resolução de problemas. Sou proativo, criativo, empático e resiliente, comprometido com a inovação na tecnologia.
              <br />✨ Minha empatia e resiliência permitem-me adaptar-me a diferentes ambientes e situações, enquanto minha gestão eficaz do tempo garante a entrega de projetos dentro do prazo e com qualidade superior. Estou aberto a novas oportunidades de colaboração e empenhado no avanço e inovação na área de tecnologia.          
            </p>
            {/*}
            
            {/*}Botão baixar CV{*/}
            <CTA/> 

          </div>
         

        </div>
      </div>
    </section>
  )
}

export default About