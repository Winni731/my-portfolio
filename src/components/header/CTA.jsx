import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div>
      <div className='cta'>
        <a href={CV} className='btn' target='_blank'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
  )
}

export default CTA
