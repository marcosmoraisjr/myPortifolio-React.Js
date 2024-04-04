import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/logo.png"
import IMG2 from "../../assets/logo.png"
import IMG3 from "../../assets/logo.png"
import IMG4 from "../../assets/logo.png"
import IMG5 from "../../assets/logo.png"

const data = [
  {
    id:1,
    image: IMG1,
    title: "myCytomine - Implantação do sistema para anotação médica (CYTOMINE) e implementação de ferramenta computacional de identificação de fibrose intersticial para o projeto Pathospotter da Fiocruz.",
    github: "link no GitHub",
    demo:"https://pathospotter.bahia.fiocruz.br/"
  },
  {
    id:2,
    image: IMG2,
    title: "myGenerator - Desenvolvimento de um gerador de aplicações MVC em ASP.NET/SQL SERVER.",
    github: "https://github.com/marcosmoraisjr/myGenerator",
    demo:"https://site.vercel.app/"
  },
  {
    id:3,
    image: IMG3,
    title: "TOTVS - Liderança técnica na implantação do ERP WINTHOR, estabelecendo recorde de implantação mais rápida na TOTVS.",
    github: "link no GitHub",
    demo:"https://site.vercel.app/"
  },
  {
    id:4,
    image: IMG4,
    title: "Enterprise - Desenvolvimento e implantação de um portal corporativo, resultando em aumento de 30% na conversão e significativa melhoria na experiência do usuário.",
    github: "https://github.com/marcosmoraisjr/myEnterprise",
    demo:"https://site.vercel.app/"
  },
  {
    id:5,
    image: IMG5,
    title: "Gênesis - Participação ativa no desenvolvimento do sistema gerencial para laboratórios de análises clínicas",
    github: "link no GitHub",
    demo:"http://www.reffit.com.br/"
  },
 

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projetos</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt="projeto secret" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target="_blank" rel='noreferrer'>GitHub</a>
                <a href= {demo} className='btn btn-primary' target="_blank" rel="noreferrer">Confira</a>
              </div>          
            </article>
          )
        })
      }
      </div>
    </section >
  )
}

export default Portfolio