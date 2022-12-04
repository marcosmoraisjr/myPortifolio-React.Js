import React from 'react'
import "./Nav.css"
import {AiFillHome} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
import {BsBookHalf} from "react-icons/bs"
import {MdDesignServices} from "react-icons/md"
import {IoMdContact} from "react-icons/io"
import { useState } from 'react'





const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav ("#")}className={activeNav === "#" ? "active" : ""}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} ><FaUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsBookHalf/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><MdDesignServices/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><IoMdContact/></a>
    </nav>
  )
}

export default Nav