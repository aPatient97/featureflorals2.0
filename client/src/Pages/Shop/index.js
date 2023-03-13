import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Shop() {

    const changeImage = () => {
        if (!mql.matches) {
            const initial = document.querySelector('.initial')
            const hovered = document.querySelector('.hovered')
            hovered.classList.add('active-pic')
            initial.classList.remove('active-pic')
        }
            
    }
        
        

    const revertImage = () => {
        if (!mql.matches) {
            const initial = document.querySelector('.initial')
            const hovered = document.querySelector('.hovered')
            initial.classList.add('active-pic')
            hovered.classList.remove('active-pic')
        }
    }

    const changeImage2 = () => {
        if (!mql.matches) {
            const initial = document.querySelector('.initial2')
            const hovered = document.querySelector('.hovered2')
            hovered.classList.add('active-pic')
            initial.classList.remove('active-pic')
        }
    }

    const revertImage2 = () => {
        if (!mql.matches) {
            const initial = document.querySelector('.initial2')
            const hovered = document.querySelector('.hovered2')
            initial.classList.add('active-pic')
            hovered.classList.remove('active-pic')
        }
    }

    let mql = window.matchMedia('(max-width: 500px)')
  


  return (
    <>
    <div className="shop-container">
        <h1>Mothers' day flowers</h1>
        <p>Delivery available for Saturday 18th March & Sunday 19th March or studio collection TW9</p>
    </div>
    <div className="product-grid">
        
        <Link className="product" to='/tulips'>
             <div className="image-hover" onMouseEnter={changeImage} onMouseLeave={revertImage}>
                <img className='initial active-pic' src="images/webp/products/tulips-p.webp" alt="a bouquet of tulip flowers" />
                <img className='hovered' src="images/webp/products/tulips-side.webp" alt="a bouquet of tulip flowers on its side" />
            </div>
            <div className="product-info">
                <h2>Tulips</h2>
                <h3>£32</h3>
            </div>
        </Link>

        <Link className="product" to='/mixed'>
            <div className="image-hover" onMouseEnter={changeImage2} onMouseLeave={revertImage2}>
                
                <img className='initial2 active-pic' src="images/webp/products/mix-thumb.webp" alt="a bouquet of tulips and mixed flowers with foliage" />
                <img className='hovered2' src="images/webp/products/mix-side.webp" alt="a bouquet of tulips and mixed flowers on its side in paper wrapping" />
            </div>
            <div className="product-info">
                <h2>Seasonal mix</h2>
                <h3>£38</h3>
            </div>
        </Link>

    </div>
    </> 
  )
}

export default Shop
