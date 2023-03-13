import React, { useState } from 'react'
import ImageCard from '../ImageCard'
import SwipeCarousel from '../SwipeCarousel'
import initialImages from './data'
import './style.css'

function MultiCarousel() {
  const [images, setImages] = useState(initialImages)
  
  const leftClick = () => {
      const nextImages = [...images]
      nextImages.map(img => {
      return (
        img.position !== 0 ? img.position-- : img.position = images.length -1
      )
      })
      setImages(nextImages)
    
  }

  const rightClick = () => {
    
      const nextImages = [...images]
      nextImages.forEach(img => {
        img.position !== 7 ? img.position++ : img.position = 0
      })
      setImages(nextImages)
    
  }

  const mql = window.matchMedia('(max-width: 500px)')

  return (
    <>
    {!mql.matches && (
      <div className="arrows-container">
        <div onClick={leftClick} className='arrows left-arrow'> {'<'}</div>

          
          <section className="multi-carousel">
        
            {images
            .filter(img => img.position < 4) // select images with position 0, 1, 2, 3
            .sort((a,b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0)) //sort images so that images are always displayed from position 0 to 3
            .map(img => <ImageCard url={img.url} alt={img.alt} key={img.id} />)}
          </section>

        <div onClick={rightClick} className='arrows right-arrow'> {'>'}</div>
      </div>
        )}

    
        {
          mql.matches && <SwipeCarousel slidesLength={8} name={'multi'}/>
        }

    </>
    
      
    
  )
}

export default MultiCarousel
