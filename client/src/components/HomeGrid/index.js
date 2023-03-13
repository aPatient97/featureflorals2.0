import React, { useEffect, useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

function HomeGrid() {

  const rightClick = () => {
    let slider = document.querySelector('.grid')
    let items = document.querySelectorAll('.grid-item')
    slider.append(items[0])
  }

  const leftClick = () => {
    let slider = document.querySelector('.grid')
    let items = document.querySelectorAll('.grid-item')
    slider.prepend(items[items.length-1])
  }

  

  return (
    <>
    <div className="arrow-container">
      <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow-left' onClick={leftClick} />   
        <div className="slider-wrap">
          <section className="grid">
            <div className="grid-item">
              <img loading='lazy' src="/images/webp/gals/dahlia-pot.webp" alt="dahlia's and foliage in a pot" />
            </div>
            <div className="grid-item" >
              <img src="/images/webp/gallery/IMG_5407.webp" alt="natural style christmas wreath" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img src="/images/webp/gallery/daisys.webp" alt="daisys growing naturally in grass" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img className='left' src="images/webp/gallery/flower-bowl-flipped.webp" alt="wild flowers in a bowl" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img src="images/webp/gallery/gyp.webp" alt="wild flowers in a bowl" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img  src="images/webp/gallery/lilac.webp" alt="wild flowers in a bowl" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img  src="images/webp/gallery/sb-park.webp" alt="wild flowers in a bowl" loading='lazy'/>
            </div>
            <div className="grid-item">
              <img  src="images/webp/gallery/pink.webp" alt="wild flowers in a bowl" loading='lazy'/>
            </div>
        </section>
      </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow-right' onClick={rightClick}/>
    </div>
    </>
  )
}

export default HomeGrid
