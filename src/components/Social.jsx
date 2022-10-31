import React from 'react'
import {FaSlack, FaGithub} from 'react-icons/fa'

const Social = () => {
  return (
    <div className="social">
        <a href="https://training.zuri.team/"> <FaSlack className='social__icon'/> </a>
        <a href="https://github.com/Geeballer"> <FaGithub className='social__icon'/> </a>
    </div>
  )
}

export default Social