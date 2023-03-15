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
   <>
        <div className="flex">
            <div className="md-popout">
                <p onClick={closeModal} className='close-modal'>close</p>
                <h1>Mothers' Day Flowers</h1>
                <p>Shop seasonal for this Mothers' Day via our web shop</p>
                <Link to='/shop'>
                    <button onClick={goToShop} className='buy-btn'>view options</button>
                </Link>
                <div className="modal-pic"></div>
            </div>
        </div>
        <div className="fader">
        </div>
   </>
    
   
  )
}

export default MothersDay
