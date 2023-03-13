import React from 'react'
import './style.css'


function InstaButton({url, text}) {
  return (
    <div className="button-container">
    <a href={url} target='_blank' rel='noreferrer' >
      <button id='insta-btn'>{text}</button>
    </a>
      
  </div>
  )
}

export default InstaButton
