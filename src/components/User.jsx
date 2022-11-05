import React from 'react'

import UserFigure from '../assets/user.jpg'

const User = () => {
  return (
    <div className='user'>
        <figure className='user__figure'>
            <img id="profile__img" src={UserFigure} alt="User"/>
        </figure>
        <p id="twitter">cascadingGeek</p>
        <p id="slack" style={{display: 'none'}}>jayBee</p>
    </div>
  )
}

export default User