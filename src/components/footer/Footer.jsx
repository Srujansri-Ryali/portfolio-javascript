import React from 'react'
import "./Footer.css"
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>srujan</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><AiOutlineFacebook /></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; srujan </small>
      </div>

    </footer>
  )
}

export default Footer