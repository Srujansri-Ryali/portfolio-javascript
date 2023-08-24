import React from 'react'
import "./Nav.css"
import {TiHomeOutline} from 'react-icons/ti'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><TiHomeOutline/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :'' }><AiOutlineUser/></a>
       <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' :'' }><BiBook/></a>
       <a href="#projects"onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' :'' }><AiOutlineFundProjectionScreen/></a>
       <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :'' }><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav