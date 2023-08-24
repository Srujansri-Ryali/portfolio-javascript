import React from 'react'
import "./About.css"
import ME from '../../assets/2pic.jpg'

import {LiaAwardSolid} from 'react-icons/lia'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>
      
      <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <LiaAwardSolid className='about__icon'/>
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>

              <article className='about__card'>
                <AiOutlineFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>5 Completed Projects</small>
              </article>
            </div>
            <p>
            Hi, I'm srujan, a code enthusiast,working on web Development and Backend Engineer using python.Have experience building few interesting web applications
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About