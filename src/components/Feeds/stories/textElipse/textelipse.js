import React from 'react'

const Textelipse = ({username,maxLength=8}) => {
    const usernameElipseStory=
    username.length>maxLength
    ?`${username.slice(0,maxLength)}`
    : username;
  return (
    <>
      <p className='text-white text-sm mt-1 truncate'>{usernameElipseStory}</p>
    </>
  )
}

export default Textelipse
