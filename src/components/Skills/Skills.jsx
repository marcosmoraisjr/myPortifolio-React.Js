import React from 'react'
import "./Skills.css"
import {CgCheckO} from "react-icons/cg"

const Skills = () => {
  return (
    <section id='skills'>
      <h2> Habilidades Técnicas</h2>

      <div className="container skills_container">
      <article className='skills'>
          <div className="skills_head">
            <h3>Hard Skills</h3>
          </div>
          <ul className='skills_list'>
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Python</p>
            </li>  
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>C# (ASP.NET CORE)</p>
            </li>
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>WEB (PHP, HTML, CSS, JavaScript, React)</p>
            </li>


            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Banco de Dados (Oracle, Sql Server, Mysql)</p>
            </li>
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Resolvedor de Problemas</p>
            </li>     
          </ul>
        </article>

        <article className='skills'>
          <div className="skills_head">
            <h3>Soft Skills</h3>
          </div>
          <ul className='skills_list'>
            
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Comunicador</p>
            </li>  
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Auto didata</p>
            </li>  
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Adaptável</p>
            </li>   
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Analista crítico</p>
            </li> 
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Proativo</p>
            </li>  
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Gestor de tempo</p>
            </li> 
            <li>
              <CgCheckO className='skills_list-icon'/>
              <p>Resiliente</p>
            </li> 
          </ul>
        </article>

        {/* end web */}

      </div>
    </section>
  )
}

export default Skills