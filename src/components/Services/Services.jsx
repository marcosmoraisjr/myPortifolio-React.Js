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
            <h3>Web</h3>
          </div>

          <ul className='service_list'>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Landing Page</p>
            </li>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>App Desktop</p>
            </li>
          </ul>
        </article>

        {/* end web */}
        
        <article className='service'>
          <div className="service_head">
            <h3>UX / UI</h3>
          </div>

          <ul className='service_list'>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Design System</p>
            </li>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <CgCheckO className='service_list-icon'/>
              <p>Canva</p>
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

      </div>
    </section>
  )
}

export default Services