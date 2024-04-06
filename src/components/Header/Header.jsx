import {useState, useEffect} from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import headerImg from "../../assets/header-eva-e-wall.png"
import "./Header.css"

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index,setIndex] = useState(1);
  const toRotate = [ "Marcos Morais", "Full-Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }




  return (
    <section className='banner' id='home'>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>            
              <div>
                <span className="tagline">Bem Vindo ao meu Portfolio</span>
                <h1>{`Saudações, eu sou `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Marcos Morais", "Full-Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>👋🏻 Estou em constante aprendizado, fascinado em contribuir para o desenvolvimento de pessoas, proporcionar melhorias para o mundo tecnológico e adquirir e compartilhar conhecimentos.</p>
              </div>
           
          </Col>
          <Col xs={12} md={6} xl={5}>             
           <div>
            <img src={headerImg} alt="Header Img"/>
           </div>           
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Header