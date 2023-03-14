import React, { useContext } from 'react'
import './style.css'
import { CartContext } from '../../cartContext'
//import { productsArray } from '../../productStore'
import { Link } from 'react-router-dom'
import CartProduct from '../../components/CartProduct'

function Basket() {
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const checkout = async () => {
        console.log('checking out')
        await fetch('https://feature-florals-server.herokuapp.com/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        })
    }
  return (
    <>
        <h1 className='checkout c-text'>Checkout </h1>
        {
        productsCount > 0 ? 
        <>
            {productsCount === 1 ? 
                <p>You have {productsCount} item in your basket:</p>
            :
                <p>You have {productsCount} items in your basket: </p>
            }
            
                {cart.items.map((product, index) => (
                    
                    <CartProduct key={index} id={product.id} quantity={product.quantity}/>
                    
                ))}
                <h2>Total: £ {cart.getTotalCost().toFixed(2)}</h2>
                <div className="btn-div">
                    <button className='checkout-btn' onClick={checkout}>Checkout</button>
                </div>
        </>
        :
        <>
        <div className="basket-info">
            <h2>Your basket is empty.</h2>
            <Link to='/shop' className='no-underline'> <p>Visit our seasonal shop here</p></Link> 
        </div>
           
        </>
    }
    </>
  )
}

export default Basket
