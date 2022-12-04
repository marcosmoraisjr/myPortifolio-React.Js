import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    
    </>
  )
}

export default App