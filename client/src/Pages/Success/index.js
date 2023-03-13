import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Success() {
  return (
    <>
    <div className="payment-div">
        <h1>Payment successful!</h1>
        <p>Thank you for your purchase</p>
        <Link to='/'>Back to home page</Link>
    </div>
       
    </>
  )
}

export default Success
