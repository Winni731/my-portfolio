import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSpellBook} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdOutlineContactless} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title="About"><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experiencet')} className={activeNav === '#experience' ? 'active' : ''} title="Skills"><GiSpellBook /></a>
        <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''} title="Project"><AiOutlineFundProjectionScreen /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title="Contact"><MdOutlineContactless /></a>
    </nav>
  )
}

export default Nav
