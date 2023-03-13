import React from 'react'
import './style.css'

function CarouselDots({slide, slides}) {
  return (
    <div className="dots">
          {slides.map((x, index) => {
            return (
                <div key={x} className={slide === index ? `active-dot dot` : 'dot'}
                >
                </div>
            )
           }
          )
        }
        </div>
  )
}

export default CarouselDots
