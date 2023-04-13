import React from 'react'
import './style.css'
import images from './data'

function GridGallery() {

    
  return (
    <div className="gallery-grid">
        {images.map((x, i) => (
            <div className="gal-item">
                <img loading='lazy' src={x.url} alt={x.alt} key={i} />
            </div>
        ))}
    </div>
  )
}

export default GridGallery
