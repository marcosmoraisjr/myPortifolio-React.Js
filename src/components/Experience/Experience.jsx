import React from 'react'
import "./Experience.css"
import{BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Hards Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
         <h3>FrontEnd Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Styled Component</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience_backend">
         <h3>BackEnd Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>           
            
          </div>
        </div>
       
        <div className="experience_softskills">
         <h3>Soft Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Resiliente</h4>                
              </div>
            </article>          

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Determinado</h4>                
              </div>
            </article> 

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Focado</h4>                
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Learnability</h4>                
              </div>
            </article>           

          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Experience