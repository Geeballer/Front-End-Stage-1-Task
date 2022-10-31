import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'

const Option = () => {
  return (
    <div className="option">
        <FaEllipsisH className='option__icon mobile'/>
        <RiShareForwardLine className='option__icon desktop'/>
    </div>
  )
}

export default Option