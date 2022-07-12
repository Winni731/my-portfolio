import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
        <h5>The tech skills I have</h5>
        <h2>My Skills</h2>

        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>Fronted Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Familar</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Familiar</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Familiar</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience_backend">
                <h3>Backend Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Java</h4>
                        <small className='text-light'>Experienced</small>                 
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Kotlin</h4>
                        <small className='text-light'>Familiar</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Familiar</small>    
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div> 
                        <h4>C</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
