import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddToBasketForm from '../../components/AddToBasketForm'
import CarouselDots from '../../components/CarouselDots'
import { productsArray } from '../../productStore'
import './style.css'

export default function MixedBouquet() {


  const slides = ['mix1', 'mix2', 'mix3','mix4']
  const [slide, setSlide] = useState(0)

  let mql = matchMedia('(max-width: 600px)')
  console.log(mql.matches)

    useEffect(() => {
      if (!mql.matches) {
        const timer = setTimeout(() => {
          slide === 2 ? setSlide(0) : setSlide(slide + 1)
        }, 3000)
        return () => clearTimeout(timer)
      }
        // eslint-disable-next-line
      }, [slide])

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
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')

    if (isLeftSwipe) {
      slide === slides.length -1 ? setSlide(0) : setSlide(slide + 1)
    }

    if (isRightSwipe) {
      slide === 0 ? setSlide(slides.length -1) : setSlide(slide - 1)
    }
  }

 
  
  return (
    <>
      <Link to='/shop' style={{ textDecoration: 'none'}}>
        <p className='shop-btn'> &#x2190; Back to shop</p>
      </Link>
      {
        mql.matches ? 

        <>
          <div className="mixed-image-container" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {slides.map((x, index) => {
              return (
                  <div 
                  key={x} 
                  className={slide === index ? `mix${index + 1} active-pic` : `mix${index + 1}`}>
                  </div>
                )
              })  
            }
          </div>
          <CarouselDots slide={slide} slides={slides} />
          <h1 className='c-text'>Seasonal Mixed Bouquet </h1>
          <h2 className='c-text'>£38.00</h2>

          <AddToBasketForm product={productsArray[1]}/>
        </>
        :
        <>
          <h1 className='c-text'>Seasonal Mixed Bouquet </h1>
          <h2 className='c-text'>£38.00</h2>
          <div className="mixed-image-container">
            {slides.map((x, index) => {
                    return (
                        <div 
                        key={x} 
                        className={slide === index ? `mix${index + 1} active-pic` : `mix${index + 1}`}>
                        </div>
                    )
                })
              }
          </div>
          <CarouselDots slide={slide} slides={slides} />
          <AddToBasketForm product={productsArray[1]} />
        </>
      }
      
    </>
  )
}
