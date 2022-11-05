import React from 'react'

import Form from '../components/Form' 

const Contact = () => {
  return (
    <div className="contact">
        <h2 className="contact__header">Contact Me</h2>
        <p className="contact__text">
            Hi there, contact me to ask me about anything you have in mind.
        </p>    
        <Form />
    </div>
  )
}

export default Contact