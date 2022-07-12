import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ying Zhang</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://github.com/Winni731"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/winni-zhang-a4620189/"><BsLinkedin/></a>
        <a href="https://twitter.com/fengfei721"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ying Zhang made with Love</small>
      </div>
    </footer>
  )
}

export default Footer
