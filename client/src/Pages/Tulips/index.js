import React, { useRef, useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import AddToBasketForm from '../../components/AddToBasketForm'
import CarouselDots from '../../components/CarouselDots'
import { productsArray } from '../../productStore'

function Tulips() {

  console.log(productsArray[0])
  const slides = ['tulips1', 'tulips2', 'tulips3','tulips4']
  const [slide, setSlide] = useState(0)

  let mql = matchMedia('(max-width: 600px)')
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
        <div className="product-image-container" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {slides.map((x, index) => {
              return (
                  <div 
                  key={x} 
                  className={slide === index ? `tulips${index + 1} active-pic` : `tulips${index + 1}`}>
                  </div>
              )
          })
          
          }
        </div>
          <CarouselDots slide={slide} slides={slides}/>
        <h1 className='c-text'>Mothers' Day Tulips</h1>
        <h2 className='c-text'>£32.00</h2>

        <AddToBasketForm product={productsArray[0]}/>
      </>
      :
      <>
        

          <h1 className='c-text'>Mothers' Day Tulips</h1>
          <h2 className='c-text'>£32.00</h2>
          
          <div className="product-image-container">
            {slides.map((x, index) => {
                  return (
                      <div 
                      key={x} 
                      className={slide === index ? `tulips${index + 1} active-pic` : `tulips${index + 1}`}>
                      </div>
                  )
              })
            }
          </div>
          <CarouselDots slide={slide} slides={slides} />
          
          <AddToBasketForm product={productsArray[0]}/>
        
      </>
}
      
    </>
  )
}

export default Tulips
