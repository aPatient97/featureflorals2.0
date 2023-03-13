import React, { useState, useRef } from 'react'

export default function SwipeCarousel({slidesLength, name}) {

    const slides = []
    for (let i = 1; i <= slidesLength; i++) {
        slides.push( name + i )
    }
    
  const [slide, setSlide] = useState(0)

  let touchStart = useRef(null)
  let touchEnd = useRef(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
   // setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
   //setTouchStart(e.targetTouches[0].clientX)
    touchEnd = null
    touchStart = e.targetTouches[0].clientX
  }

  const onTouchMove = (e) => touchEnd = e.targetTouches[0].clientX

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      slide === slides.length -1 ? setSlide(0) : setSlide(slide + 1)
    }

    if (isRightSwipe) {
      slide === 0 ? setSlide(slides.length -1) : setSlide(slide - 1)
    }
  }

  const leftClick = () => {
    slide === slides.length -1 ? setSlide(0) : setSlide(slide + 1)
  }

  const rightClick = () => {
    slide === 0 ? setSlide(slides.length -1) : setSlide(slide - 1)
  }

  return (
    <>
        <div className="arrows-container">
            <div onClick={leftClick} className='arrows left-arrow'> {'<'}</div>
                <div className={name + '-image-container'} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    {slides.map((x, index) => {
                        return (
                            <div 
                            key={x} 
                            className={slide === index ? `${name}${index + 1} active-pic` : `${name}${index + 1}`}>
                            </div>
                        )
                        })  
                    }
                </div>
            <div onClick={rightClick} className='arrows right-arrow'> {'>'} </div>
        </div>
    </>
  )
}
