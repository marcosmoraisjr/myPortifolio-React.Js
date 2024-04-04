import React from 'react'
import "./Services.css"
import {CgCheckO} from "react-icons/cg"

const Services = () => {
  return (
    <section id='services'>
      <h2>Serviços</h2>

      <div className="container services_container">
        
        <article className='service'>
          <div className="service_head">
            <h3>Consultoria</h3>
          </div>
          <ul className='service_list'>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>TOTVS</p>
            </li>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Processos</p>
            </li>
          </ul>
        </article>
        {/* end web */}

        <article className='service'>
          <div className="service_head">
            <h3>Sistemas</h3>
          </div>

          <ul className='service_list'>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Desenvolvimento de Sistemas</p>
            </li>       
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Aulas</h3>
          </div>
          <ul className='service_list'>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Algoritimos</p>
            </li>       
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Linguagem de Programação</p>
            </li>    
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Gestão de Projetos</p>
            </li>     
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Entre em contato</p>
            </li>            
          </ul>
        </article>
          {/* end web */}



      </div>
    </section>
  )
}

export default Services