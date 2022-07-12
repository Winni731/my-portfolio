import React from 'react'
import './project.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Profile',
        github: 'https://github.com/Winni731/',
        demo: 'https://github.com/Winni731/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fantastic Diary',
        github: 'https://github.com/Winni731/HawkHack_my-app',
        demo: 'https://github.com/Winni731/HawkHack_my-app'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Hit Cat Game',
        github: 'https://github.com/Winni731/MyGDXGame',
        demo: 'https://github.com/Winni731/MyGDXGame'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Mini Soccer Game',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Mini Soccer Game',
        github: 'https://github.com/achhina/MiniSoccerGameProject',
        demo: 'https://github.com/achhina/MiniSoccerGameProject'
    }
]

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container project_container">
        {
            data.map(({id, image, title, github, demo}) => {
                return (
                    <article key={id} className='project_item'>
                    <div className="project_item-image">
                        <img src={image} alt={title} />
                    </div>
                        
                        <h3>{title}</h3>
                        <div className="project_item-cta">
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo Coming</a>
                        </div>
                </article>
                )
            })
        }
        <article className='project_item'>
            <div className="project_item-image">
                <img src={IMG6} alt="" />
            </div>
                
                <h3>More Projects . . .</h3>
                <div className="project_item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Project List</a>
                </div>
        </article>

      </div>
    </section>
  )
}

export default Project
