import React from 'react';

// Importa os arquivos PDF do currículo da pasta de ativos
import cvResumePDF from '../../assets/cv-resume.pdf';
import cvPDF from '../../assets/cv.pdf';

// Componente de chamada para ação (Call to Action)
const CTA = () => {
  return (
    // Div que encapsula as chamadas para ação
    <div className='cta'>
      {/* Botão para baixar o currículo "cv-resume.pdf" */}
      <a href={cvResumePDF} download className='btn btn-primary' style={{ marginRight: '10px' }}>
        Baixar Currículo (Resumo)
      </a>
      
      {/* Botão para baixar o currículo "cv.pdf" */}
      <a href={cvPDF} download className='btn btn-primary'>
        Baixar Currículo (Completo)
      </a>

      {/* Adiciona um estilo específico para dispositivos móveis */}
      <style>
        {`
          @media (max-width: 768px) {
            .cta a {
              margin-bottom: 10px; /* Adiciona margem inferior para separar os botões */
            }
          }
        `}
      </style>
    </div>
  );
};

// Exporta o componente CTA
export default CTA;
