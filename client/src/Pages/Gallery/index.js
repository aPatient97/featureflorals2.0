import React from 'react'
import Carousel from '../../components/Carousel'
import GridGallery from '../../components/GridGallery'
import InstaSVG from '../../components/InstaSVG'
import './style.css'

function Gallery() {
  return (
    <>
      <Carousel /> 
      <GridGallery />    
      <InstaSVG />
    </>
  )
}

export default Gallery
