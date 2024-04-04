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
            
            <p>
              <br />👋🏻 Saudações!
              <br />
              <br />🚀 Eu sou Marcos Morais, apaixonado pela transformação de ideias em soluções tecnológicas impactantes.
              <br />🎓 Possuo mestrado em Ciência da Computação e pós-graduação em Gestão de TI, acumulando mais de uma década de experiência no desenvolvimento de soluções em informática nos setores de varejo, indústria, educação e saúde.
              <br />💼 Tenho habilidades técnicas sólidas em C#, Python, .NET, ASP.NET, PHP, HTML, CSS, JavaScript, Oracle, SQL Server, MySQL e NoSQL, com experiência em sistemas ERP como Protheus e Winthor da TOTVS.
              <br />🌟 Destaco-me por competências como comunicação eficaz, trabalho em equipe colaborativo e resolução de problemas. Sou proativo, criativo, empático e resiliente, comprometido com a inovação na tecnologia.
              <br />✨ Minha empatia e resiliência permitem-me adaptar-me a diferentes ambientes e situações, enquanto minha gestão eficaz do tempo garante a entrega de projetos dentro do prazo e com qualidade superior. Estou aberto a novas oportunidades de colaboração e empenhado no avanço e inovação na área de tecnologia.          
            </p>
            
            {/*}Botão baixar CV{*/}
            <CTA/>
     

{/*}
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Certificações</h5>
              <ul>
                <li>Angular e ASP.NET Core Web API, Entity Framework Core e ASP.NET Core Identity (Udemy)</li>
                <li>Azure Boards: gerenciamento de projetos Azure DevOps (Udemy)</li>
                <li>MongoDB 2023 [NoSQL do Básico ao Avançado!] (Udemy)</li>
                <li>Git e GitHub do básico ao avançado com gist e GitHub (Udemy)</li>
                <li>Programação  C# e ASP.NET + SQL - SERVER (FTC)</li>
                <li>Microsoft PowerBI Especialista (DATAB)</li>
                <li>Segmentação de Imagens com Python de A a Z  (Udemy)</li>
                <li>Programação Python 3 - Mundo 1 (Curso em Vídeo)</li>
                <li>Programação Python para Iniciantes (DATAB)</li>
                <li>Algoritmos e Lógica de Programação (Curso em Vídeo)</li>
                <li>Intel Cloud Computing (Intel)</li>
                <li>Intel Virtualization (Intel)</li>
                <li>Intel ERP (intel)</li>
                <li>Programação ADVPL II Protheus (TOTVS)</li>
                <li>Monitoria Redes de Computadores (FTC)</li>
                <li>Imersão Mikrotik Unifi (HackOne)</li>
                <li>D'olho Na Qualidade 5Ss (SEBRAE )</li>
                <li>Campus Party Bahia (Instituto Campus Party)</li>
              </ul>
            </article>

            <article className="about_card">
              <FaFolderOpen className='about_icon'/>
              <h5>Projetos Destacados</h5>
              <small>+10 Concluídos</small>
              <ul>
                <li>myCytomine - Sistema para anotação médica e implementação de ferramenta computacional de identificação de fibrose intersticial para o projeto Pathospotter da Fiocruz.</li>
                <li>myGenerator - Desenvolvimento de um gerador de aplicações MVC/ASP.NET/SQL SERVER.</li>
                <li>myEnterprise - Desenvolvimento e implantação de um portal corporativo, resultando em aumento de 30% na conversão e significativa melhoria na experiência do usuário.</li>
                <li>Gênesis - Participação ativa no desenvolvimento do sistema gerencial para laboratórios de análises clínicas</li>
                <li>TOTVS - Liderança técnica na implantação do ERP WINTHOR, estabelecendo recorde de implantação mais rápida na TOTVS.</li>
              </ul>
            </article>
  {*/}
            

          </div>

         

        </div>
      </div>
    </section>
  )
}

export default About