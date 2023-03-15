import React, { useState, useContext } from 'react'
import './style.css'
import { CartContext } from '../../cartContext'
import { Link } from 'react-router-dom'
//import { productsArray } from '../../productStore'

export default function AddToBasketForm({product}) {
  const [remainder, setRemainder] = useState(140)
  const [amount, setAmount] = useState(0)
    
  const cart = useContext(CartContext)
  //const getProductQuantity = cart.getProductQuantity(product.id)
  console.log(cart.items) 
  

  const charLeft = () => {
      const chars = document.querySelector('#message')
      setRemainder(chars.maxLength - chars.value.length)
    }
        
  const handleClick = () => {
    cart.addOneToCart(product.id, amount)
  }    

  const handleChange= () => {
    setAmount(Number(document.querySelector('#quantity').value))
  }
  
  console.log(document.querySelector('#quantity')?.value)
  
  return (
    <form className="checkout-form">
        <label htmlFor="quantity">Quantity</label>
        <input onChange={handleChange}type="number" name='quantity' id='quantity' min='1' max='10'/>
        <label htmlFor="message">{`Message: (${remainder} remaining)`}</label>
        <textarea name="message" id="message" cols="30" rows="10" maxLength={140} onKeyUp={charLeft}>
        </textarea>
        
        <Link to='/basket'>
          <button type="button" className='cart-btn pointer' onClick={handleClick}>Add to basket</button>
        </Link>
      </form>
  )
}
