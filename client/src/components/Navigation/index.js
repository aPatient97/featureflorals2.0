import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Burger from '../Burger'
import { useState } from 'react'

function Navigation({scrollContact}) {

  const [burgered, setBurgered] = useState(false)
  
  const showNav = () => {
    const navLinks = document.querySelectorAll('.nav-links')
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    burger.classList.toggle('toggle')
    nav.classList.toggle('nav-active')
    nav.classList.toggle('inactive')
    navLinks.forEach(x => {
      x.classList.toggle('visible')
      console.log('added')
    })
    setBurgered(!burgered)
  }

  const closeNav = () => {
      burgered && showNav()
    }

  // const logo = document.querySelector('#featureflorals') 
  // burgered ? 

  let mql = window.matchMedia('(max-width: 500px)')

  return (
    <header>
      <nav className='inactive' >
            <Link to='/about' className='nav-links' onClick={closeNav}>
            About
            </Link>
            <Link to='/shop' className='nav-links' onClick={  closeNav} >
              Shop
            </Link>
            <Link to='/' className='nav-links' id='featureflorals' onClick={closeNav}>
              Feature Florals
            </Link>
            <Link to='/gallery' className='nav-links' onClick={closeNav}>
            Gallery
            </Link>
            <a href="https://www.instagram.com/featureflorals/" target='_blank' rel='noreferrer' className='nav-links'>
            Socials
            </a> 
            {mql.matches && <Link to='/basket' className='nav-links' onClick={closeNav}>Basket</Link>}
              
            <Burger className='burger' showNav={showNav} />
      </nav>
    </header>
  )
}

export default Navigation
