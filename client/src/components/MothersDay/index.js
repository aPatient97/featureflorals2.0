import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function MothersDay({setMothersDay}) {

    const closeModal = () => {
        setMothersDay(false)
    }

    const goToShop = () => {
        console.log('go to shop')
    }

  return (
   <div className="flex">
    <div className="md-popout">
        <button onClick={closeModal} className='close-modal'>X</button>
        <h1>Mother's Day Tulips!</h1>
        <p>Get your flowers here. Delivery to TW1, TW8, TW9, TW10, W4, SW13 and SW14.</p>
        <div className="m-img-container">
            <img src="/images/webp/gals/tulip-nice.webp" alt="a very large orange pink flowering tulip" />
        </div>
        <Link to='/shop'>
            <button onClick={goToShop} className='buy-btn'>Buy now!</button>
        </Link>
    
    </div>
   </div>
    
   
  )
}

export default MothersDay
