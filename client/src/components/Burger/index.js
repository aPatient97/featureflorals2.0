import React from 'react'
import './style.css'

function Burger({showNav}) {
  return (
    <div className="burger" onClick={showNav}>
        <div id="line-1"></div>
        <div id="line-2"></div>
        <div id="line-3"></div>
    </div>
  )
}

export default Burger
