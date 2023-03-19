import React from 'react'
import './style.css'

export default function ScrollDown() {
    const handleClick = () => {
        console.log('clicked')
        const dest = document.querySelector('.break-container')
        dest && dest.scrollIntoView({ behaviour: 'smooth' })
    }
    
    // const handleWheel = () => {
    //     console.log('wheeled')
    //     const destination = document.querySelector('.break-container')
    //     console.log(destination)
    //     destination && destination.scrollIntoView({ behaviour: 'smooth' })
    // }

  return (
    <div className="scroll-down">
        <p className='pointer' onClick={handleClick} >Scroll down or click for more</p>
        <svg className='pointer' onClick={handleClick} fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>chevron-down</title>
              <path d="M26.531 10.47c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-9.469 9.469-9.47-9.469c-0.135-0.131-0.319-0.212-0.523-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.388 0.213 0.523l10 10.001c0.136 0.135 0.323 0.219 0.53 0.219s0.394-0.084 0.53-0.219l10.001-10.001c0.135-0.136 0.218-0.323 0.218-0.53s-0.083-0.394-0.218-0.53l0 0z"></path>
        </svg>
    </div>
  )
}
