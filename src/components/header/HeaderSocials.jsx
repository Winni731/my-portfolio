import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {SiDevpost} from 'react-icons/si'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/Winni731" target="_blank" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ying-zhang-a4620189/" target="_blank" title="Linkedin"><BsLinkedin /></a>
        <a href="https://devpost.com/Winni731" target="_blank" title="Devpost"><SiDevpost /></a>
    </div>
  )
}
