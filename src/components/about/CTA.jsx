import React from 'react'
import CV from "../../assets/cv.pdf"


const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-primary'>Baixar Curriculo</a>      
    </div>
  )
}

export default CTA