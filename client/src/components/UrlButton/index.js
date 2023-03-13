import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function UrlButton({text, url}) {
  return (
    <div className="button-container">
      <NavLink to={url}>
        <button>{text}</button>
      </NavLink>
    </div>
  )
}

export default UrlButton
