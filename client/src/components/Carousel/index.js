import React, { useState, useEffect } from 'react'
import './style.css'

function Carousel() {
    const slides = ['slide1', 'slide2', 'slide3']
    const [slide, setSlide] = useState(0)
    
    useEffect(() => {
        const timer = setTimeout(() => {
           slide === 2 ? setSlide(0) : setSlide(slide + 1)
        }, 3000)
        return () => clearTimeout(timer)
    }, [slide])

  return (
    <>
        <div className="slider">
            {slides.map((x, index) => {
                return (
                    <div 
                    key={x} 
                    className={slide === index ? `slide${index + 1} active-pic` : `slide${index + 1}`}>
                    </div>
                )
            })
            }
        </div>
    </>
  )
}

export default Carousel
