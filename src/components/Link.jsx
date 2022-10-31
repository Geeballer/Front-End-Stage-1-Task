import React from 'react'

const Link = ({linkName, linkSource, linkId}) => {
  return (
    <>
      <a href={linkSource} id={linkId} className='link'>{linkName}</a>
    </>
    )
}

export default Link