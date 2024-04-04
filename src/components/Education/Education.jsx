import React from 'react'
import "./Education.css"
import{BsPatchCheckFill} from "react-icons/bs"

const Education = () => {
  return (
    <section id='education'>
      <h2>Experiência</h2>

      <div className="container education_container">

        <div className="education_backend">
          <h3>📚 Grau de instrução</h3>
          <div className="education_content">
            
            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Mestrado em Ciências da Computação (UEFS).</h4>
                <small className='text-light'>Concluído em 2022</small>
              </div>
            </article>
   
            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Pós Graduação em Gestão de TI (UniFTC)</h4>
                <small className='text-light'>Concluído em 2012</small>
              </div>
            </article>           
            
            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Bacharelado em Sistemas de Informação (UniFTC)</h4>
                <small className='text-light'>Concluído em 2010</small>
              </div>
            </article>  
          
          </div>
        </div>
       
        <div className="education_softskills">
          <h3>💼 Experiência Profissional</h3>
          
          <div className="education_content">
           
            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Desenvolvedor Full Stack com mais de 10 anos de experiência</h4>
                <small className='text-light'></small>
              </div>
            </article> 

            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Especializado em desenvolvimento web, com foco em back-end</h4>
                <small className='text-light'></small>
              </div>
            </article> 

            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Experiência comprovada em automação comercial e melhoramento de processos</h4>
                <small className='text-light'></small>
              </div>
            </article> 

            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Proficiente em metodologias ágeis, como Scrum</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className="education_details">
              <BsPatchCheckFill className='education_details-icon'/>
              <div>
                <h4>Experiência de mais de 10 anos na docência do ensino superior na área de informática</h4>
                <small className='text-light'></small>
              </div>
            </article> 

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default education