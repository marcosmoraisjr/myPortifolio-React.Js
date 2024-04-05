import React from 'react'
import "./Education.css"
import {CgCheckO} from "react-icons/cg"

const Education = () => {
  return (
    <section id='education'>
      <h2>Formação Acadêmica</h2>

      <div className="container education_container">
        

      <article className='education'>
          <div className="education_head">
            <h3>MESTRE</h3>
          </div>
          <ul className='education_list'>
            <li>
              <CgCheckO className='education_list-icon'/>
              <p>Mestre em Ciência da Computação (UEFS-2022)</p>
            </li>       
            
          </ul>
          
        </article>

        <article className='education'>
          <div className="education_head">
            <h3>ESPECIALISTA</h3>
          </div>
          <ul className='education_list'>
            <li>
              <CgCheckO className='education_list-icon'/>
              <p>Pós Graduação em Gestão de TI (UniFTC-2012)</p>
            </li>       
          </ul>
        </article>

        <article className='education'>
          <div className="education_head">
            <h3>BACHAREL</h3>
          </div>
          <ul className='education_list'>
            <li>
              <CgCheckO className='education_list-icon'/>
              <p>Bacharelado em Sistemas de Informação (UniFTC-2010)</p>
            </li>       
          </ul>
        </article>
          {/* end web */}



      </div>
    </section>
  )
}

export default Education