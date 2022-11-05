import React from 'react'
import {FaSlack, FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Social = () => {
  return (
    <div className="social">
        <div className="social__handles">
          <a href="https://training.zuri.team/"> <FaSlack className='social__icon'/> </a>
          <a href="https://github.com/Geeballer"> <FaGithub className='social__icon'/> </a>
        </div>
        <Link to='/contact' id='contact'> Contact Me </Link>
    </div>
    
  )
}

export default Social