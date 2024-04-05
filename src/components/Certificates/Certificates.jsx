import React from 'react'
import "./Certificates.css"
import{BsPatchCheckFill} from "react-icons/bs"

const Certificates = () => {
  return (
    <section id='certificates'>
      
      <h2>Certificados e Capacitações</h2>
      <div className="container certificates_container">

        <div className="certificates_backend">
          <h3>💼 Experiência Profissional</h3>
          <div className="certificates_content">
            
            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Desenvolvedor de Software</h4>
                <small className='text-light'>INDÚSTRIA DE ARTEFATOS DE FIBRA - (2003-2024)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Gerente de TI </h4>
                <small className='text-light'>GRUPO VALDIR BARRETO - (1995-ATUAL)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Professor de ensino superior em universidade de tecnologia</h4>
                <small className='text-light'>UNIVERSIDADE UNIFTC/UNEX - (2011-2022)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Software Developer (researcher)</h4>
                <small className='text-light'>UESF/LACAD - (2021-2023)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Software Developer (researcher)</h4>
                <small className='text-light'>UESF/PATHOSPOTTER  - (2021-2023)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Software Developer</h4>
                <small className='text-light'>REFFIT SOLUÇÕES EM TECNOLOGIA - (2010-2021)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Software Developer</h4>
                <small className='text-light'>MEGABYTE SOLUÇÕES EM INFORMÁTICA - (2010-2012)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Consultor de Tecnologia da Informação</h4>
                <small className='text-light'>COMPUSUL COMPUTADORES - (2010-2012)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Analista de Sistemas</h4>
                <small className='text-light'>CONCESSIONÁRIA HONDA WANMOTOS - (2002-2012)</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Analista de Sistemas</h4>
                <small className='text-light'>GRUPO EDUARDO TECIDOS - (2000-2010)</small>
              </div>
            </article>

          </div>
        </div>
       
        <div className="certificates_backend">
          <h3>💡 Projetos Destacados:</h3>
          <div className="certificates_content">
            
            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Cytomine</h4>
                <small className='text-light'>Implantação do sistema para anotação médicas para o projeto Pathospotter da Fiocruz</small>
                <br/><a href="https://pathospotter.bahia.fiocruz.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>mySegmenter</h4>
                <small className='text-light'>implementação de ferramenta computacional de identificação de fibrose intersticial para o projeto Pathospotter da Fiocruz</small>
                <br/><a href="https://pathospotter.bahia.fiocruz.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>myGenerator</h4>
                <small className='text-light'>Desenvolvimento de um gerador de aplicações MVC em ASP.NET/SQL SERVER</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Totvs Winthor</h4>
                <small className='text-light'>Liderança técnica na implantação do ERP WINTHOR, estabelecendo recorde de implantação mais rápida na TOTVS.</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>myEnterprise</h4>
                <small className='text-light'>Desenvolvimento e implantação de um portal corporativo, resultando em aumento de 30% na conversão e significativa melhoria na experiência do usuário</small>
              </div>
            </article>

            <article className="certificates_details">
              <BsPatchCheckFill className='certificates_details-icon'/>
              <div>
                <h4>Gênesis</h4>
                <small className='text-light'>desenvolvimento do sistema gerencial para laboratórios de análises clínicas</small>
                <br/><a href="http://www.reffit.com.br/" target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            </article>

          </div>
        </div>

        
        
        
      </div>

    </section>
  )
}

export default Certificates