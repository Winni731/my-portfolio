import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'

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
        <a href="https:github.com"><IoLogoTwitter /></a>
        <a href="https:linkedln.com"><IoLogoTwitter /></a>
        <a href="https:twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ying Zhang made with Love</small>
      </div>
    </footer>
  )
}

export default Footer
