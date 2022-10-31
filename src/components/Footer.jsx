import React from 'react'

import zuriLogo from '../assets/zuri-Logo.jpeg'
import i4gLogo from '../assets/I4G-Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer__logo">
        <figure className='footer__logo--figure'>
          <img className='footer__logo--figure--img' src={zuriLogo} alt="Zuri Logo" />
        </figure>
        <p className="footer__logo--text">
          HNG Internship 9 Frontend Task
        </p>
        <figure className='footer__logo--figure'>
          <img className='footer__logo--figure--img' src={i4gLogo} alt="I4G Logo" />
        </figure>
      </div>
    </footer>
  )
}

export default Footer