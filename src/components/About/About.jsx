import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about-icon'/>
              <h5> Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className='about-icon'/>
              <h5> Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about-icon'/>
              <h5> Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quaerat recusandae temporibus dicta! Dicta facilis quas at obcaecati, repellat nihil molestiae incidunt, eius maxime quaerat nobis totam voluptatum ullam ab.
            </p>
            <a className="btn btn-primary" href='#contact'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About