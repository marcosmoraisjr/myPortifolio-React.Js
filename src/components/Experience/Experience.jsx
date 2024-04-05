import React from 'react'
import "./Experience.css"
import{BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      
      <h2>Experiência</h2>
      <div className="container experience_container">

        <div className="experience_backend">
          <h3>💼 Experiência Profissional</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Desenvolvedor de Software</h4>
                <small className='text-light'>INDÚSTRIA DE ARTEFATOS DE FIBRA - (2003-2024)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Gerente de TI </h4>
                <small className='text-light'>GRUPO VALDIR BARRETO - (1995-ATUAL)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Professor do Ensino Superior</h4>
                <small className='text-light'>UNIVERSIDADE UNIFTC/UNEX - (2011-2022)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Software Developer (researcher)</h4>
                <small className='text-light'>UESF/LACAD - (2021-2023)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Software Developer (researcher)</h4>
                <small className='text-light'>UESF/PATHOSPOTTER  - (2021-2023)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Software Developer</h4>
                <small className='text-light'>REFFIT SOLUÇÕES EM TECNOLOGIA - (2010-2021)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Programador de Computador</h4>
                <small className='text-light'>MEGABYTE SOLUÇÕES EM INFORMÁTICA - (2010-2012)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Consultor de Tecnologia da Informação</h4>
                <small className='text-light'>COMPUSUL COMPUTADORES - (2010-2012)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Analista de Sistemas</h4>
                <small className='text-light'>CONCESSIONÁRIA HONDA WANMOTOS - (2002-2012)</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Analista de Sistemas</h4>
                <small className='text-light'>GRUPO EDUARDO TECIDOS - (2000-2010)</small>
              </div>
            </article>

          </div>
        </div>
       
        <div className="experience_backend">
          <h3>💡 Projetos Destacados:</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Cytomine</h4>
                <small className='text-light'>Sistema para anotação médicas para o projeto Pathospotter da Fiocruz</small>
                <br/><a href="https://pathospotter.bahia.fiocruz.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>mySegmenter</h4>
                <small className='text-light'>Ferramenta computacional de identificação de fibrose intersticial para o projeto Pathospotter da Fiocruz</small>
                <br/><a href="https://pathospotter.bahia.fiocruz.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>myGenerator</h4>
                <small className='text-light'>Gerador de aplicações MVC em ASP.NET/SQL SERVER</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Totvs Winthor</h4>
                <small className='text-light'>Liderança técnica na implantação do ERP WINTHOR, estabelecendo recorde de implantação mais rápida na TOTVS.</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>myEnterprise</h4>
                <small className='text-light'>Portal corporativo, resultando em aumento de 30% na conversão e significativa melhoria na experiência do usuário</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Gênesis</h4>
                <small className='text-light'>Sistema gerencial para laboratórios de análises clínicas</small>
                <br/><a href="http://www.reffit.com.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

          </div>
        </div>

        
        
        
      </div>

    </section>
  )
}

export default Experience