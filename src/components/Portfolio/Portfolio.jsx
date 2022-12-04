import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/secret.png"
import IMG2 from "../../assets/quiz.png"
import IMG3 from "../../assets/netflix.png"

const data = [
  {
    id:1,
    image: IMG1,
    title: "Projeto Secret Word, abordando o hooks useStates para alterar os estados, useEffect para monitoramentos e useCallBack para resolver conflitos do useEffect, simulando um sistemas de rotas com a criação de diversos componentes",
    github: "https://github.com/Renatofujimoto/secret-word",
    demo:"https://secret-word-dun.vercel.app/"
  },
  {
    id:2,
    image: IMG2,
    title: "Projeto Quiz, utilizando os hooks useReducer para gerenciamento de estados complexos e useContext para passar dados através da árvore de componentes e criação de componentes JSX do React",
    github: "https://github.com/Renatofujimoto/Quiz",
    demo: "https://quiz-seven-pi.vercel.app/"
  },
  {
    id:3,
    image: IMG3,
    title: "Projeto Netflix Clone, utilizando os hooks useEffect para renderização do componente, consumindo a API the movie DB com o metodo fetch",
    github: "https://github.com/Renatofujimoto/netflix-clone",
    demo: "https://netflix-clone-xet8.vercel.app/"
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