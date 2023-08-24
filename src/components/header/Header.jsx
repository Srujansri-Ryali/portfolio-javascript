import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Sri Srujan Ryali</h1>
      <h5 className='text-light'>Web Developer</h5>
      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'></a>
      </div>
      </header>
  )
}

export default Header