import React from 'react'
import "./Projects.css"
import IMG1 from '../../assets/project1.jpeg'
import IMG2 from '../../assets/project2.jpeg'
import IMG3 from '../../assets/project3.jpeg'
import IMG4 from '../../assets/project4.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
      <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>This is a project item title</h3>
          <div className='projects__item-cta'>
            <a href="https://www.google.co.in/" className='btn' target='_blank'>Project Page</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>This is a project item title</h3>
          <div className='projects__item-cta'>
            <a href="https://www.google.co.in/" className='btn' target='_blank'>Project Page</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>This is a project item title</h3>
          <div className='projects__item-cta'>
            <a href="https://www.google.co.in/" className='btn' target='_blank'>Project Page</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Projects