import React from 'react'
import './about.css'
import ME from '../../assets/myPhoto.png'
import {TbSchool} from 'react-icons/tb'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsFillChatDotsFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt="About Image" />
                </div>

            <div className="about_me-chat">
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
            </div>

            </div>
      
            <div className="about_content">
                <div className="about_cards">

                    <article className='about_card'>
                        <TbSchool className='about_icon' />
                        <h5>Education</h5>
                        <small><b>York University<br/></b>Computer Science - Honors Bachelor</small>
                        <br/>
                        <small><b>Brock University<br/></b>Business Administration Finance - Honors Bachelor</small>

                    </article>

                    <article className='about_card'>
                        <FaAward className='about_icon' />
                        <h5>Experience</h5>
                        <small><b>Somoplay Inc.<br/></b>Software Developer Intern</small>
                        <br/>
                        <small><b>York University<br/></b>Java Teaching Assistant</small>
                        <br/>
                        <small><b>LEIVARIE Inc.<br/></b>Administrative Intern</small>
                        <br/>
                        <small><b>Kate Spade<br/></b>Sales Lead</small>

                    </article>

                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon' />
                        <h5>Projects</h5>
                        <small>Personal profile</small>
                        <br />
                        <small>Fantastic Diary</small>
                        <br />
                        <small>Hit Cat Game</small>
                        <br />
                        <p><a href="https://winni731.github.io/yz_profile/project.html">Check More ...</a></p>


                    </article>

                    <article className='about_card'>
                        <BsFillChatDotsFill className='about_icon' />
                        <p>Hi, I'm currently a student.</p>
                        <small>I solve problems on LeeCode.</small>
                        <p><a href="https://leetcode.com/fengfei721/">My LeeCode Status</a></p>


                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About