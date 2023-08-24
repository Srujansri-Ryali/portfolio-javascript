import React from 'react'
import "./Contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>srisrujanryali12@gmail.com</h5>
            <a href='mailto:srisrujanryali12@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>srisrujanryali12@gmail.com</h5>
            <a href='mailto:srisrujanryali12@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8639204435</h5>
            <a href='https://api.whatsapp.com/send?phone=+918639204435' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact